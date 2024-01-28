import { COOKIE_NAME } from "@/app/constants"
import { connectToDB } from "@/app/lib/database/utils"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Task from "../database/models/Task"
import mongoose from "mongoose"
import User from "../database/models/User"

interface Task {
  id: string
  title: string
  description: string
  importance: string
  status: string
  author: string
  roleAuthor: string
}

export async function extractTaskById (importance: string, status: string, search: string, idOwner: string): Promise<Task[]> {
  const regexImportance = new RegExp(importance, "i")
  const regexStatus = new RegExp(status, "i")
  const regexSearch = new RegExp(search, "i")
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
    const userPastor = await User.findById(id)
    if (userPastor === null) {
      redirect('/login')
    }
    if(userPastor.role !== 'pastor') {
      redirect('/login')
    }
    
    const tasks = await Task.aggregate(
        [
            {
                $lookup:
                {
                    from: "users", // 2
                    localField: "author", // 1 (Publicaciones)
                    foreignField: "_id", // 2
                    as: "userAuthor"
                }
            },
            { $unwind: "$userAuthor" },
            { $match: { 
              owner: new mongoose.Types.ObjectId(idOwner),
              status: { $regex: regexStatus },
              importance: { $regex: regexImportance },
              title: { $regex: regexSearch }
            } }
        ]
    )
    return tasks.map((task) => {
      return {
        id: task._id,
        title: task.title,
        description: task.description,
        importance: task.importance,
        status: task.status,
        author: task.userAuthor.name,
        roleAuthor: task.userAuthor.role
      }
    })

  } catch (error) {
    console.log(error)
    redirect('/login')
  }
}
