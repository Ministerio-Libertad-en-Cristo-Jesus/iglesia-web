import UserPlacehoderSmall from "@/app/components/componentSVG/UserPlaceHolderSmall"
import VerifiedIcon from "@/app/components/componentSVG/VerifiedIcon"
import { extractUserById } from "@/app/lib/actions/extractUserById"

const CardUserSmall = async ({ id }: { id: string }) => {
  const user = await extractUserById(id)
  return (
    <article className="flex bg-blueI items-center justify-start rounded-xl py-2 pl-3 pr-10 gap-2">
      <div>
        <UserPlacehoderSmall />
      </div>
      <div>
        <h3 className="flex font-black text-whiteI gap-1">{user.name} <VerifiedIcon admin={user.role !== 'lider'} small={true} /></h3>
        <p className="text-whiteI text-xs">{user.email}</p>
      </div>
    </article>
  )
}
 
export default CardUserSmall
