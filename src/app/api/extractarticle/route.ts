import { COOKIE_NAME } from '@/app/constants'
import Article from '@/app/lib/database/models/Article'
import User from '@/app/lib/database/models/User'
import { connectToDB } from '@/app/lib/database/utils'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ message: 'Faltan datos' }, { status: 400 })
  }

  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
  }
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET || ''

  try {
    await connectToDB()
    const verifiedToken = verify(token, secret)
    if (typeof verifiedToken === 'string') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const { email } = verifiedToken
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    if (user.role !== 'pastor') {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 })
    }
    const article = await Article.findById(id)
  
    return NextResponse.json(article, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }
}
