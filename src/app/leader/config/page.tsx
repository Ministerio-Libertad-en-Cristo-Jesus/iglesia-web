import ChangeName from "@/app/ui/leader/config/ChangeName"
import ChangePassword from "@/app/ui/leader/config/ChangePassword"
import ChangePhone from "@/app/ui/leader/config/ChangePhone"
import ChangeUsername from "@/app/ui/leader/config/ChangeUsername"

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
