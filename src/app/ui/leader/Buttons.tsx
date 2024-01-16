'use client'
import DashboardIcon from "@/app/components/componentSVG/DashboardIcon";
import Button from "./Button";
import TaskIcon from "@/app/components/componentSVG/TaskIcon";
import ConfigIcon from "@/app/components/componentSVG/ConfigIcon";
import LogoutIcon from "@/app/components/componentSVG/LogoutIcon";
import axios from "axios";

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
    <div className="flex flex-col justify-between w-full h-full rounded-b-xl px-2">
      <div className="w-full">
        <Button icon={<DashboardIcon />} rute='/leader' name='Inicio' />
        <Button icon={<TaskIcon />} rute='/leader/tasks' name='Tareas' />
        <Button icon={<ConfigIcon />} rute='/leader/config' name='Configuración' />
      </div>
      <div className="w-full mb-8">
        <Button icon={<LogoutIcon />} rute='/login' name='Cerrar Sesión' onClick={handleLogout} />
      </div>
    </div>
  )
}
 
export default Buttons;