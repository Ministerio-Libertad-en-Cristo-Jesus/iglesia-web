import Link from "next/link"
import CardUserSmall from "./CardUserSmall"
import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon"

const HeaderUser = ({ id }: { id: string }) => {
  return (
    <section className="flex w-full items-center justify-between">
      <Link className="bg-blueI p-4 rounded-full" href='/dashboard/users'><ArrowBackIcon /></Link>
      <CardUserSmall id={id} />
    </section>
  )
}
 
export default HeaderUser
