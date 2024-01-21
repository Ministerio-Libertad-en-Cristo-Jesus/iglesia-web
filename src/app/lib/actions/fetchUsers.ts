import { COOKIE_NAME, ITEM_PER_PAGE } from "@/app/constants"
import User from "@/app/lib/database/models/User"
import { connectToDB } from "@/app/lib/database/utils"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface User {
  _id: string
  email: string
  username: string
  name: string
  role: string
  phone: string
}

export async function fetchUsers (search: string, page: number, role: string): Promise<{ users: User[], count: number }> {
  const regex = new RegExp(search, "i")
  const regexRole = new RegExp(role, "i")
  ITEM_PER_PAGE
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) {
    redirect('/login')
  }
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET || ''

  try {
    await connectToDB()
    const verifiedToken = verify(token, secret)
    if (typeof verifiedToken === 'string') {
      redirect('/login')
    }
    const { email } = verifiedToken
    const userFind = await User.findOne({ email }, { name: 1, username: 1, phone: 1, email: 1, role: 1 })
    if (userFind === null) {
      redirect('/login')
    }
    if(userFind.role !== 'pastor'){
      redirect('/login')
    }

    const count = await User.find({ _id: { $ne: userFind.id }, name: { $regex: regex }, role: { $regex: regexRole } }).countDocuments()
    const users = await User.find({ _id: { $ne: userFind.id }, name: { $regex: regex }, role: { $regex: regexRole } }, { name: 1, phone: 1, email: 1, role: 1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return {
      users,
      count
    }

  } catch (error) {
    console.log(error)
    redirect('/login')
  }
}
