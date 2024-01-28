"use server"
import { revalidatePath } from "next/cache"
import { connectToDB } from "../database/utils"
import { redirect } from "next/navigation"
import User from "../database/models/User"

export async function deleteUser(formData: FormData) {
  const { id } = Object.fromEntries(formData)
  
  try {
    await connectToDB()
    await User.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}
