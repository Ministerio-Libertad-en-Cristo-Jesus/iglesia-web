"use server"
import { revalidatePath } from "next/cache"
import Task from "../database/models/Task"
import { connectToDB } from "../database/utils"
import { redirect } from "next/navigation"

export async function updateTaskStatusUser(formData: FormData) {
  const { status, id, idOwner } = Object.fromEntries(formData)
  
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
  revalidatePath(`/dashboard/users/${idOwner}?section=tasks`)
  redirect(`/dashboard/users/${idOwner}?section=tasks`)
}
