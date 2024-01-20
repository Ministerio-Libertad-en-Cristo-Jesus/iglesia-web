import { COOKIE_NAME } from "@/app/constants"
import User from "@/app/lib/database/models/User"
import { connectToDB } from "@/app/lib/database/utils"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface User {
  email: string
  username: string
  name: string
  role: string
  phone: string
}

export async function extractUser (): Promise<User> {
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

    return userFind

  } catch (error) {
    console.log(error)
    redirect('/login')
  }
}
