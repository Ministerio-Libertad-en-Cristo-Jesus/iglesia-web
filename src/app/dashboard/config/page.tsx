import ChangeName from "@/app/ui/dashboard/config/ChangeName"
import ChangePassword from "@/app/ui/dashboard/config/ChangePassword"
import ChangePhone from "@/app/ui/dashboard/config/ChangePhone"
import ChangeUsername from "@/app/ui/dashboard/config/ChangeUsername"

const Config = () => {
  return (
    <section className="flex flex-col max-h-full overflow-auto textcal w-full p-8 bg-whiteI gap-8 rounded-xl">
      <ChangeName />
      <hr className="border-blueI" />
      <ChangeUsername />
      <hr className="border-blueI" />
      <ChangePhone />
      <hr className="border-blueI" />
      <ChangePassword />
    </section>
  )
}
 
export default Config
