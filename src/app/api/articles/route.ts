import Article from '@/app/lib/database/models/Article'
import { connectToDB } from '@/app/lib/database/utils'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {

  try {
    await connectToDB()

    const article = await Article.find()
  
    return NextResponse.json(article, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }
}
