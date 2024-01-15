import User from "@/app/lib/database/models/User"
import bcrypt from 'bcrypt'
import { connectToDB } from "@/app/lib/database/utils"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { email, name, password, role } = body
  // Si algun dato falta o viene vacio devuelvo error
  if (!email || !name || !password || !role) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }
  try {
    // Me conecto a la base de datos
    await connectToDB()

    // Verifico si el email ya esta registrado en la base de datos y si es asi devuelvo error
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json({ message: 'El email ya esta registrado' }, { status: 400 })
    }

    // Encripto la contraseña y guardo el usuario en la base de datos con la contraseña encriptada y el array de assignedtasks y imposedtasks vacios.
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      name,
      password: hashPassword,
      role,
      assignedtasks: [],
      imposedtasks: []
    })

    await newUser.save()
    return NextResponse.json({ message: 'Usuario creado' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
