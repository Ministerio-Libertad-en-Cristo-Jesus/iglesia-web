import LoadingDashboard from "@/app/components/LoadingDashboard"
import ArticlesTable from "@/app/ui/dashboard/articles/ArticlesTable"
import HeaderArticle from "@/app/ui/dashboard/articles/HeaderArticles"
import { Suspense } from "react"

const Articles = ({ searchParams }: { searchParams: { search?: string, page?: string, type?: string } }) => {
  const search = searchParams?.search || ''
  const type = searchParams?.type || ''
  const page = searchParams?.page !== undefined ? parseInt(searchParams.page) : undefined || 1
  return (
    <div className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <HeaderArticle />
      <hr className="border-blueI" />
      <Suspense fallback={<LoadingDashboard />}>
        <ArticlesTable search={search} page={page} type={type} />
      </Suspense>
    </div>
  )
}
 
export default Articles
