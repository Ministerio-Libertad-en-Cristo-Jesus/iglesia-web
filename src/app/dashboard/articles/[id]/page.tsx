import FormEditArticle from "@/app/ui/dashboard/articles/editArticle/FormEditArticle"
import HeaderEditArticle from "@/app/ui/dashboard/articles/editArticle/HeaderEditArticle"

const Article = ({ params }: { params: { id: string } }) => {

  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <HeaderEditArticle />
      <hr className="border-blueI" />
      <FormEditArticle id={params.id} />
    </div>
  )
}
 
export default Article
