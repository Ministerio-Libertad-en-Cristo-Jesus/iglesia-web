import Article from '@/app/lib/database/models/Article'
import { connectToDB } from '@/app/lib/database/utils'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = req.url
  const queryString = new URL(url).search

  const params = new URLSearchParams(queryString)

  const page = params.get('page') || '1'
  
  
  try {
    await connectToDB()
    const count = await Article.find({ type: 'news' }).countDocuments()
    const articles = await Article.find({ type: 'news' })
      .limit(6)
      .skip(6 * (parseInt(page) - 1))
      .sort({ createdAt: -1 })
  
    return NextResponse.json({ articles, count }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }
}
