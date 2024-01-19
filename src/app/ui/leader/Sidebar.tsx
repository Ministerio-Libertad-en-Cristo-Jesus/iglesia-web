import LogoBlueSmall from "@/app/components/componentSVG/LogoBlueSmall"
import Buttons from "./Buttons"

const Sidebar = () => {
  return (
    <aside className="flex flex-col min-h-[432px] max-h-[94vh] w-[30%] bg-grayI rounded-xl gap-8">
      <div className="flex justify-center items-center py-6 w-full bg-blueI rounded-t-xl">
        <div className="w-20">
          <LogoBlueSmall />
        </div>
      </div>
      <Buttons />
    </aside>
  )
}
 
export default Sidebar