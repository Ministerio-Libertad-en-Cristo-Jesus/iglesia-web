import bcrypt from "bcrypt"
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
  const { newPassword, id } = body
  if (!newPassword || !id) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }
  const secret = process.env.JWT_SECRET || ''

  try {
    await connectToDB()

    const verifiedToken = verify(token, secret)
    if (typeof verifiedToken === 'string') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }

    const idOwner = verifiedToken.id
    const userAdmin = await User.findById(idOwner)
    if(userAdmin === null) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    if(userAdmin.role !== 'pastor') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const userFind = await User.findById(id)
    if(userFind === null) {
      return NextResponse.json({ message: 'Este usuario no existe' }, { status: 404 })
    }

    const passwordHash = await bcrypt.hash(newPassword, 10)
    userFind.password = passwordHash
    await userFind.save()
    return NextResponse.json({ message: 'Contraseña Cambiada' }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }

}