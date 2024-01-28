import { COOKIE_NAME } from '@/app/constants'
import User from '@/app/lib/database/models/User'
import { connectToDB } from '@/app/lib/database/utils'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function PUT(req: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
  }

  const body = await req.json()
  const { newUsername } = body
  if (!newUsername) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }
  const secret = process.env.JWT_SECRET || ''

  try {
    await connectToDB()

    const verifiedToken = verify(token, secret)
    if (typeof verifiedToken === 'string') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const { email } = verifiedToken
    const existUsername = await User.findOne({ username: newUsername })

    const userFind = await User.findOne({ email })
    if(userFind === null) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const sameUsername = userFind.username === newUsername
    if (sameUsername) {
      return NextResponse.json({ message: 'Ya estas usando este nombre de usuario' }, { status: 400 })
    }
    if (existUsername) {
      return NextResponse.json({ message: 'El nombre de usuario ya esta en uso' }, { status: 400 })
    }

    userFind.username = newUsername
    await userFind.save()
    return NextResponse.json({ message: 'Nombre de usuario Cambiado' }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }

}
