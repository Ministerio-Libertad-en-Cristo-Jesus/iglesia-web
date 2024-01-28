import User from "@/app/lib/database/models/User"
import bcrypt from 'bcrypt'
import { connectToDB } from "@/app/lib/database/utils"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { COOKIE_NAME } from "@/app/constants"
import { verify } from "jsonwebtoken"

export async function POST(req: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  // Si no hay token devuelvo error
  if (!token) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
  }
  const secret = process.env.JWT_SECRET || ''

  const body = await req.json()
  const { email, username, phone, name, password, role } = body
  // Si algun dato falta o viene vacio devuelvo error
  if (!email || !username || !phone || !name || !password || !role) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }
  try {
    const verifiedToken = verify(token, secret)
    // Si el token no es valido devuelvo error
    if (typeof verifiedToken === 'string') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const { id } = verifiedToken
    // Me conecto a la base de datos
    await connectToDB()
    const user = await User.findById(id)
    if (!user) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    if (user.role !== 'pastor') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }

    // Verifico si el email ya esta registrado en la base de datos y si es asi devuelvo error
    const userMail = await User.findOne({ email })
    if (userMail) {
      return NextResponse.json({ message: 'El email ya esta registrado' }, { status: 400 })
    }
    const userName = await User.findOne({ username })
    if (userName) {
      return NextResponse.json({ message: 'El username ya esta en uso' }, { status: 400 })
    }

    // Encripto la contraseña y guardo el usuario en la base de datos con la contraseña encriptada y el array de assignedtasks y imposedtasks vacios.
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      username,
      phone,
      name,
      password: hashPassword,
      role
    })

    await newUser.save()
    return NextResponse.json({ message: 'Usuario creado' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
