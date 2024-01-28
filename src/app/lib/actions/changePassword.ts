import bcrypt from "bcrypt"
import { cookies } from "next/headers"
import { connectToDB } from "../database/utils"
import { COOKIE_NAME } from "../../constants"
import { redirect } from "next/navigation"
import { verify } from "jsonwebtoken"
import User from "../database/models/User"

export async function changePassword(newpassword: string): Promise<string> {
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
    if(userFind === null) {
      redirect('/login')
    }
    const samePassword = await bcrypt.compare(userFind.password, newpassword)
    if (samePassword) {
      return 'Ya estas usando esta contraseña'
    }
    const passwordHash = await bcrypt.hash(newpassword, 10)
    userFind.password = passwordHash
    await userFind.save()
    return 'Contraseña cambiada'
  } catch (error) {
    return 'Error al cambiar contraseña'
  }
}
