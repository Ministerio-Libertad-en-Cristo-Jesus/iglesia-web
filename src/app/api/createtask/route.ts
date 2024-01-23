import Task from '@/app/lib/database/models/Task'
import { connectToDB, disconnectToDB } from "@/app/lib/database/utils"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { COOKIE_NAME } from '@/app/constants'
import { verify } from 'jsonwebtoken'
import User from '@/app/lib/database/models/User'

export async function POST(req: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  // Si no hay token devuelvo error
  if (!token) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
  }
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET || ''
  
  // Extraigo los datos del body
  const body = await req.json()
  const { title, description, importance, id } = body
  // Si algun dato falta o viene vacio devuelvo error
  if (!title || !description || !importance || !id) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }
  try {
    const verifiedToken = verify(token, secret)
    // Si el token no es valido devuelvo error
    if (typeof verifiedToken === 'string') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const { email } = verifiedToken
    // Me conecto a la base de datos
    await connectToDB()

    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    if (user.role !== 'pastor') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }

    const userToImpose = await User.findById(id)
    if (!userToImpose) {
      return NextResponse.json({ message: 'No existe el usuario' }, { status: 404 })
    }

    // Creo la tarea nueva tarea
    const newTask = new Task({
      title,
      description,
      importance,
      author: user._id,
      owner: userToImpose._id
    })
    await newTask.save()

    return NextResponse.json({ message: 'Tarea creada' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
