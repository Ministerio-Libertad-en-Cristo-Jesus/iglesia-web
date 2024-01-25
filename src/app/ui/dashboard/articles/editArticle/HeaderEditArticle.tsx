import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon"
import Link from "next/link"

const HeaderEditArticle = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <Link className="bg-blueI p-4 rounded-full" href='/dashboard/articles'><ArrowBackIcon /></Link>
      <div>
        <h2 className="font-black text-blueI text-3xl text-end">Editar artículo</h2>
        <p className="text-blueI text-end">Ingresa los datos que quieres editar</p>
      </div>
    </div>
  )
}
 
export default HeaderEditArticle
