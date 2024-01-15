import User from "@/app/lib/database/models/User"
import bcrypt from "bcrypt"
import { connectToDB } from "@/app/lib/database/utils"
import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"
import { serialize } from "cookie"
import { COOKIE_NAME } from "@/app/constants"

const MAX_AGE = 60 * 30

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password, role } = body
  if(!email || !password || !role) {
    return NextResponse.json({ message: "Faltan datos" }, { status: 400 })
  }
  try {
    await connectToDB()
    const user = await User.findOne({ email })
    if(user === null) {
      return NextResponse.json({ message: "Email o Contraseña incorrecta" }, { status: 401 })
    }
    if(user.role !== role) {
      return NextResponse.json({ message: `Esta cuenta no es de tipo: ${role}` }, { status: 401 })  
    }

    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword) {
      return NextResponse.json({ message: "Email o Contraseña incorrecta" }, { status: 401 })
    }

    const secret = process.env.NEXT_PUBLIC_JWT_SECRET || ""
    const token = sign(
      {
        email: user.email
      },
      secret,
      {
        expiresIn: MAX_AGE
      }
    )

    const serialized = serialize(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    })

    return NextResponse.json({ message: "Logueado correctamente" }, { status: 200, headers: { "Set-Cookie": serialized } })

  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
