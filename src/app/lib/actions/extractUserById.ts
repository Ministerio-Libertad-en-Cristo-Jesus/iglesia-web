import { COOKIE_NAME } from "@/app/constants"
import User from "@/app/lib/database/models/User"
import { connectToDB } from "@/app/lib/database/utils"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface User {
  email: string
  name: string
  role: string
}

export async function extractUserById (id: string): Promise<User> {
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
    const { email } = verifiedToken
    const userFind = await User.findOne({ email })
    if (userFind === null) {
      redirect('/login')
    }
    if (userFind.role !== 'pastor') {
      redirect('/login')
    }

    const user = await User.findById(id, { name: 1, email: 1, role: 1})
    if (user === null) {
      redirect('/dashboard/users')
    }

    return user

  } catch (error) {
    console.log(error)
    redirect('/login')
  }
}
