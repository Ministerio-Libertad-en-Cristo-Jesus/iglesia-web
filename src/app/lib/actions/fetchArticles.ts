import { COOKIE_NAME, ITEM_PER_PAGE } from "@/app/constants"
import User from "@/app/lib/database/models/User"
import { connectToDB } from "@/app/lib/database/utils"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Article from "../database/models/Article"

interface ArticleType {
  _id: string
  title: string
  author: string
  type: string
  createdAt: Date
}

export async function fetchArticles (search: string, page: number, type: string): Promise<{ articles: ArticleType[], count: number }> {
  const regex = new RegExp(search, "i")
  const regexType = new RegExp(type, "i")
  ITEM_PER_PAGE
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) {
    redirect('/login')
  }
  const secret = process.env.JWT_SECRET || ''

  try {
    await connectToDB()
    const verifiedToken = verify(token, secret)
    if (typeof verifiedToken === 'string') {
      redirect('/login')
    }
    const { id } = verifiedToken
    const userFind = await User.findById(id)
    if (userFind === null) {
      redirect('/login')
    }
    if(userFind.role !== 'pastor'){
      redirect('/login')
    }

    const count = await Article.find({ title: { $regex: regex }, type: { $regex: regexType } }).countDocuments()
    const articles = await Article.find({ title: { $regex: regex }, type: { $regex: regexType } }, { title: 1, type: 1, author: 1, createdAt: 1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .sort({ createdAt: -1 });
    return {
      articles,
      count
    }

  } catch (error) {
    console.log(error)
    redirect('/login')
  }
}
