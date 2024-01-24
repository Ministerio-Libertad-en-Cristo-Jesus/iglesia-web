import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon";
import Link from "next/link";

const HeaderNewArticle = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <Link className="bg-blueI p-4 rounded-full" href='/dashboard/articles'><ArrowBackIcon /></Link>
      <div>
        <h2 className="font-black text-blueI text-3xl text-end">Crear nuevo Artículo</h2>
        <p className="text-blueI text-end">Ingresa los datos del nuevo artículo</p>
      </div>
    </div>
  )
}
 
export default HeaderNewArticle;