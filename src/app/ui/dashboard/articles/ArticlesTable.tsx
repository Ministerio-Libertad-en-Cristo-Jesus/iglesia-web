import Pagination from "./Pagination"
import Link from "next/link"
import { fetchArticles } from "@/app/lib/actions/fetchArticles"
import { typeDateSeter } from "@/app/lib/typeDateSeter"
import { deleteArticle } from "@/app/lib/actions/deleteArticle"

const ArticlesTable = async ({ search, page, type }: { search: string, page: number, type: string }) => {
  const { articles, count } = await fetchArticles(search, page ,type)
  return (
    <div className="flex flex-col w-full gap-8">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blueI border-b border-blueI">
            <th className="py-3 px-3 text-start text-whiteI">Título</th>
            <th className="py-3 px-3 text-start text-whiteI">Autor</th>
            <th className="py-3 px-3 text-start text-whiteI">Tipo</th>
            <th className="py-3 px-3 text-start text-whiteI">Fecha</th>
            <th className="py-3 px-3 text-start text-whiteI">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            articles.map((article) => (
              <tr key={article._id} className="border-b border-blueI hover:bg-grayI">
                <td className="py-3 px-3 text-blueI">{article.title}</td>
                <td className="py-3 px-3 text-blueI">{article.author}</td>
                <td className="py-3 px-3 text-blueI">{article.type === 'news' ? 'Noticia' : 'Prédica'}</td>
                <td className="py-3 px-3 text-blueI">{typeDateSeter(article.createdAt)}</td>
                <td className="flex flex-wrap items-center py-3 px-3 gap-3">
                  <Link
                  className="bg-blueI py-1 px-4 text-whiteI text-xs rounded-lg"
                  href={`/dashboard/articles/${article._id}`}
                  >
                    Editar
                  </Link>
                  <form className="flex items-center" action={deleteArticle}>
                    <input className="hidden" name="id" type="text" value={JSON.parse(JSON.stringify(article._id))} readOnly />
                    <button className="bg-red-800 py-1 px-4 text-whiteI text-xs rounded-lg">Eliminar</button>
                  </form>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
 
export default ArticlesTable
