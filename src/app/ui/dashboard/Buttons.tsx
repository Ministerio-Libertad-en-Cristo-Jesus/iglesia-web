'use client'
import DashboardIcon from "@/app/components/componentSVG/DashboardIcon";
import Button from "./Button";
import TaskIcon from "@/app/components/componentSVG/TaskIcon";
import ConfigIcon from "@/app/components/componentSVG/ConfigIcon";
import LogoutIcon from "@/app/components/componentSVG/LogoutIcon";
import axios from "axios";
import UsersIcon from "@/app/components/componentSVG/UsersIcon";
import ArticlesIcon from "@/app/components/componentSVG/ArticlesIcon";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter()
  const handleLogout = () => {
    axios.get('/api/logout', { withCredentials: true })
      .then(res => {
        router.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="flex flex-row md:flex-col items-center justify-between w-full h-full rounded-b-xl py-5 px-3 sm:px-5 md:py-0">
      <div className="flex flex-row md:flex-col w-full gap-3 md:gap-0">
        <Button icon={<DashboardIcon />} rute='/dashboard' name='Inicio' />
        <Button icon={<TaskIcon />} rute='/dashboard/tasks' name='Tareas' />
        <Button icon={<UsersIcon />} rute='/dashboard/users' name='Usuarios' />
        <Button icon={<ArticlesIcon />} rute='/dashboard/articles' name='Artículos' />
        <Button icon={<ConfigIcon />} rute='/dashboard/config' name='Configuración' />
      </div>
      <div className="flex justify-end md:justify-stretch w-full mb-0 md:mb-8">
        <button onClick={handleLogout} className="flex w-auto md:w-full items-center p-1 md:py-3 md:pl-2 rounded-md hover:bg-whiteI">
          <LogoutIcon />
          <p className='font-medium hidden md:block text-sm min-[1441px]:text-base sm:text-lg text-blueI ml-3'>Cerrar Sesión</p>
        </button>
      </div>
    </div>
  )
}
 
export default Buttons;