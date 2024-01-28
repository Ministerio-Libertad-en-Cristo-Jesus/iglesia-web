import FormNewArticle from "@/app/ui/dashboard/articles/createarticle/FormNewArticle"
import HeaderNewArticle from "@/app/ui/dashboard/articles/createarticle/HeaderNewArticle"

const CreateArticle = () => {
  return (
    <section className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <HeaderNewArticle />
      <hr className="border-blueI" />
      <FormNewArticle />
    </section>
  )
}
 
export default CreateArticle