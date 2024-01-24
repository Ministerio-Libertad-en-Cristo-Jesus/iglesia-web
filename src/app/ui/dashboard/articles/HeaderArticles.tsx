import Link from "next/link"

const HeaderArticles = () => {
  return (
    <div className="flex w-full">
      <Link className="font-bold text-xl bg-blueI py-2 px-4 text-whiteI rounded-full" href={'/dashboard/articles/createarticle'}>
        +
      </Link>
    </div>
  )
}
 
export default HeaderArticles
