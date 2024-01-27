'use client'
import { useState } from "react"
import ButtonLogin from "@/app/components/ButtonLogin"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { useRouter } from "next/navigation"
import InputPhone from "@/app/components/InputPhone"
import { validatePhone } from "./validatePhone"

const ChangePhone = () => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const [newPhone, setnewPhone] = useState('')
  const [newPhoneError, setnewPhoneError] = useState('')

  const handleChangePhone = (value: string) => {
    setMessage('')
    setnewPhone(value)
    setnewPhoneError(validatePhone(value))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')

    if(newPhone === '') {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (newPhoneError !== '') {
      setMessage('*Verifica los errores')
      return
    }

    setLoading(true)
    axios.put('/api/changephone', {
      newPhone: `+${newPhone}`
    }, { withCredentials: true })
      .then(res => {
        setLoading(false)
        setMessage(res.data.message)
        setnewPhone('')
        setnewPhoneError('')
      })
      .catch(err => {
        setLoading(false)
        if(err.response.data.message === 'No autorizado') {
          router.push('/login')
        }
        setMessage(err.response.data.message)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 md:gap-8">
      <h2 className="text-blueI font-black text-xl sm:text-2xl">Cambiar Teléfono</h2>
      <InputPhone value={newPhone} onChange={handleChangePhone} placeholder="Nuevo Teléfono" errorMessage={newPhoneError} />
      <div className={`flex w-full justify-center ${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <div className={`flex w-full justify-center ${message === '' ? 'hidden' : ''}`}>
        <p className={`text-sm font-semibold text-center rounded-lg ${message === 'Teléfono Cambiado' ? 'text-green-700 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-3`}>{message}</p>
      </div>
      <ButtonLogin text="Cambiar teléfono" dark={true} disabled={loading} type="submit" />
    </form>
  )
}
 
export default ChangePhone
