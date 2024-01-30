import Article from '@/app/lib/database/models/Article'
import { connectToDB } from '@/app/lib/database/utils'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  
  
  try {
    await connectToDB()

    const article = await Article.find({ type: 'preach' })
    .limit(4)
    .sort({ createdAt: -1 })
  
    return NextResponse.json(article, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }
}
