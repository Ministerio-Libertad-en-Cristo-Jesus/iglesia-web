'use client'
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { useState } from "react"

const ResPassword = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    axios.put(`/api/resetpassword`, { id, newPassword: 'MILibertadEnCristoJesus'}, { withCredentials: true })
      .then(res => {
        setLoading(false)
        setMessage(res.data.message)
      })
      .catch(err => {
        setLoading(false)
        setMessage(err.response.data.message)
      })
  }

  return (
    <section className="flex flex-col w-full gap-8">
      <div className="flex flex-col w-full">
        <h3 className="font-black text-2xl text-blueI text-center">¡Click en el boton para restaurar la contraseña!</h3>
        <p className="text-blueI text-center">Al restaurar la contraseña pasa a ser <b>MILibertadEnCristoJesus</b></p>
      </div>
      <div className={`${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <p className={`${message === '' ? 'hidden' : ''} text-sm font-medium text-center rounded-lg ${message === 'Contraseña Cambiada' ? 'text-green-800 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-1`}>{message}</p>
      <button onClick={handleClick} disabled={loading} className="bg-blueI w-full text-whiteI rounded-lg py-3 text-center">Restaurar Contraseña</button>
    </section>
  )
}
 
export default ResPassword
