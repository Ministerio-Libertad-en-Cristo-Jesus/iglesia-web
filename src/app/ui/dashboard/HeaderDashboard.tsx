'use client'
import { usePathname } from "next/navigation"
import SearchBar from "./SearchBar"

const HeaderDashboard = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full justify-between">
      <h1 className="font-black text-blueI text-xl md:text-3xl">
        {
          pathname.startsWith('/dashboard/tasks')
          ? 'Tareas'
          : pathname.startsWith('/dashboard/config')
          ? 'Configuración'
          : pathname.startsWith('/dashboard/users')
          ? 'Usuarios'
          : pathname.startsWith('/dashboard/articles')
          ? 'Artículos'
          : 'Dashboard'
        }
        </h1>
      <SearchBar />
    </div>
  )
}
 
export default HeaderDashboard