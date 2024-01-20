import LogoBlueSmall from "@/app/components/componentSVG/LogoBlueSmall"
import Buttons from "./Buttons"

const Sidebar = () => {
  return (
    <aside className="flex flex-row md:flex-col md:min-h-[432px] max-h-[94vh] w-full md:w-[30%] bg-white rounded-xl gap-4 md:gap-8">
      <div className="justify-center hidden sm:flex items-center py-3 px-5 md:py-6 bg-blueI rounded-l-xl md:rounded-bl-none md:rounded-t-xl">
        <div className="w-14 md:w-20">
          <LogoBlueSmall />
        </div>
      </div>
      <Buttons />
    </aside>
  )
}
 
export default Sidebar