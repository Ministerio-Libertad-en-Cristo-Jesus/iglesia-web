import Link from "next/link"
import CardUserSmall from "./CardUserSmall"
import ArrowBackIcon from "@/app/components/componentSVG/ArrowBackIcon"
import { Suspense } from "react"
import LoadingCard from "./LoadingCard"

const HeaderUser = ({ id }: { id: string }) => {
  return (
    <section className="flex w-full items-center justify-between">
      <Link className="bg-blueI p-4 rounded-full" href='/dashboard/users'><ArrowBackIcon /></Link>
      <Suspense fallback={<LoadingCard />}>
        <CardUserSmall id={id} />
      </Suspense>
    </section>
  )
}
 
export default HeaderUser
