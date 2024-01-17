'use client'
import { usePathname } from "next/navigation"
import SearchBar from "./SearchBar"

const HeaderLeader = () => {
  const pathname = usePathname()
  return (
    <div className="flex w-full justify-between">
      <h1 className="font-black text-blueI text-3xl">{pathname === '/leader' ? 'Dashboard' : pathname === '/leader/tasks' ? 'Tareas' : pathname === '/leader/config' ? 'Configuración' : 'Dashboard'}</h1>
      <div className="">
        <SearchBar />
      </div>
    </div>
  )
}
 
export default HeaderLeader