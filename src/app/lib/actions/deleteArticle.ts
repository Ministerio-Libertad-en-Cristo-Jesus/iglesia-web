"use server"
import { revalidatePath } from "next/cache"
import { connectToDB } from "../database/utils"
import { redirect } from "next/navigation"
import Article from "../database/models/Article"
import { deleteImage } from "../firebase/config"

export async function deleteArticle(formData: FormData) {
  const { id } = Object.fromEntries(formData)
  
  try {
    await connectToDB()
    await deleteImage(id as string)
    await Article.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/dashboard/articles")
  redirect("/dashboard/articles")
}
