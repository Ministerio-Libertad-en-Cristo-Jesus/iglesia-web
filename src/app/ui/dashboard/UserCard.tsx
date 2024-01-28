import UserPlaceHolder from "@/app/components/componentSVG/UserPlaceholder"
import VerifiedIcon from "@/app/components/componentSVG/VerifiedIcon"
import ButtonCard from "./ButtonCard"
import { extractUser } from "@/app/lib/actions/extractUser"

const UserCard = async () => {
  const user = await extractUser()
  return (
    <article className="flex flex-col w-full p-4 sm:p-6 md:p-8 bg-whiteI gap-6 md:gap-8 rounded-xl">
      <div className="flex gap-4 sm:gap-6 md:gap-8">
        <UserPlaceHolder />
        <div className="flex flex-col">
          <h3 className="flex items-center gap-2 text-base md:text-3xl text-blueI font-black">{user.name} <VerifiedIcon small={false} admin={user.role === 'pastor'} /></h3>
          <p className="text-xs md:text-sm text-gray-700">@{user.username}</p>
          <p className="text-blueI text-xs sm:text-sm mt-3"><b>Email:</b> {user.email}</p>
          <p className="text-blueI text-xs sm:text-sm"><b>Teléfono:</b> {user.phone}</p>
          <p className="text-blueI text-xs sm:text-sm"><b>Cargo:</b> {user.role}</p>
        </div>
      </div>
      <section className="flex flex-col w-full h-full gap-6">
        <div className="flex flex-col items-center h-full w-full gap-4 sm:gap-6 md:gap-8">
          <div className="flex w-full gap-4 sm:gap-6 md:gap-8">
            <ButtonCard rute="/leader/tasks" name="Tareas por hacer"/>
            <ButtonCard rute="/leader/users" name="Ver usuarios"/>
          </div>
          <div className="flex w-full gap-4 sm:gap-6 md:gap-8">
            <ButtonCard rute="/leader/articles" name="Ver artículos"/>
            <ButtonCard rute="/leader/config" name="Cambiar contraseña"/>
          </div>
        </div>
      </section>
    </article>
  )
}
 
export default UserCard