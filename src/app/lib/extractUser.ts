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

export async function extractUser (): Promise<User> {
  let user = {
    email: '',
    name: '',
    role: ''
  }

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
    const userFind = await User.findOne({ email })
    user = {
      email: userFind?.email,
      name: userFind?.name,
      role: userFind?.role
    }
    return user

  } catch (error) {
    console.log(error)
    redirect('/login')
  }
}
