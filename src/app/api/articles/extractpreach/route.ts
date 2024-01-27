import Article from '@/app/lib/database/models/Article'
import { connectToDB } from '@/app/lib/database/utils'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = req.url
  const queryString = new URL(url).search

  const params = new URLSearchParams(queryString)

  const paramTitle = params.get('title') || ''
  const title = decodeURIComponent(paramTitle)
  
  try {
    await connectToDB()

    const article = await Article.findOne({ title })
    if (article === null) {
      return NextResponse.json({ message: 'No existe el artículo' }, { status: 404 })
    }
  
    return NextResponse.json(article, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: 'Ha ocurrido un error' }, { status: 401 })
  }
}
