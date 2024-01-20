"use server"
import { revalidatePath } from "next/cache"
import Task from "../database/models/Task"
import { connectToDB } from "../database/utils"
import { redirect } from "next/navigation"

export async function updateTaskStatus(formData: FormData) {
  const { status, id } = Object.fromEntries(formData)
  try {
    await connectToDB()
    if (status === 'completed') {
      await Task.findByIdAndDelete(id)
    } else {
      let statusUpdate = status === 'not_started' ? 'in_progress' : 'completed'
      await Task.findByIdAndUpdate(id, { status: statusUpdate })
    }
    
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/leader/tasks")
  redirect("/leader/tasks")
}
