import UserPlaceHolder from "@/app/components/componentSVG/UserPlaceholder"
import VerifiedIcon from "@/app/components/componentSVG/VerifiedIcon"
import ButtonCard from "./ButtonCard"
import { extractUser } from "@/app/lib/extractUser"

const UserCard = async () => {
  const user = await extractUser()
  return (
    <article className="flex w-full p-8 bg-grayII gap-8 rounded-xl">
      <UserPlaceHolder />
      <section className="flex flex-col w-full h-full gap-6">
        <div>
          <h3 className="flex items-center gap-2 text-3xl text-blueI font-black">{user.name} <VerifiedIcon admin={user.role === 'pastor'} /></h3>
          <p className="text-sm text-gray-700">{user.email}</p>
        </div>
        <div className="flex h-full w-full gap-8">
          <ButtonCard rute="/leader/tasks" name="Tareas por hacer"/>
          <ButtonCard rute="/leader/config" name="Cambiar contraseña"/>
        </div>
      </section>
    </article>
  )
}
 
export default UserCard