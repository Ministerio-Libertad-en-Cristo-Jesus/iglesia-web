import { connectToDB } from "@/app/lib/database/utils"
import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { COOKIE_NAME } from '@/app/constants'
import { verify } from 'jsonwebtoken'
import User from '@/app/lib/database/models/User'
import Article from '@/app/lib/database/models/Article'
import { uploadImage } from "@/app/lib/firebase/config"

export async function POST(req: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  // Si no hay token devuelvo error
  if (!token) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
  }
  const secret = process.env.JWT_SECRET || ''
  
  // Extraigo los datos del body
  const body = await req.json()
  const { title, content, type, image, author } = body
  // Si algun dato falta o viene vacio devuelvo error
  if (!title || !content || image === undefined || !type || !author) {
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
    const titleRepeat = await Article.findOne({ title })
    if (titleRepeat) {
      return NextResponse.json({ message: 'El titulo ya existe' }, { status: 400 })
    }

    // Creo la tarea nueva tarea
    const newArticle = new Article({
      title,
      content: content.split('\n\n'),
      type,
      author,
      image: 'https://imagen.com'
    })
    await newArticle.save()
    const urlImage = await uploadImage(image, newArticle._id.toString())
    newArticle.image = urlImage
    await newArticle.save()

    return NextResponse.json({ message: 'Articulo creado' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Ocurrio un error', error }, { status: 400 })
  }
}
