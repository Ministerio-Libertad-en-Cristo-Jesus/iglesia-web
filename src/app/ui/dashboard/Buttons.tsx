'use client'
import DashboardIcon from "@/app/components/componentSVG/DashboardIcon";
import Button from "./Button";
import TaskIcon from "@/app/components/componentSVG/TaskIcon";
import ConfigIcon from "@/app/components/componentSVG/ConfigIcon";
import LogoutIcon from "@/app/components/componentSVG/LogoutIcon";
import axios from "axios";
import UsersIcon from "@/app/components/componentSVG/UsersIcon";
import ArticlesIcon from "@/app/components/componentSVG/ArticlesIcon";

const Buttons = () => {
  const handleLogout = () => {
    axios.get('/api/logout', { withCredentials: true })
      .then(res => {
        console.log(res.data)
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
        <Button icon={<LogoutIcon />} rute='/login' name='Cerrar Sesión' onClick={handleLogout} />
      </div>
    </div>
  )
}
 
export default Buttons;