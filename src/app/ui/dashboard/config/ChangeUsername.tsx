'use client'
import { useState } from "react"
import ButtonLogin from "@/app/components/ButtonLogin"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { useRouter } from "next/navigation"
import Input from "@/app/components/Input"
import { validateUsername } from "./validateUsername"

const ChangeUsername = () => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const [newUsername, setnewUsername] = useState('')
  const [newUsernameError, setnewUsernameError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setMessage('')
    setnewUsername(value)
    setnewUsernameError(validateUsername(value))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')

    if(newUsername === '') {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (newUsernameError !== '') {
      setMessage('*Verifica los errores')
      return
    }

    setLoading(true)
    axios.put('/api/changeusername', {
      newUsername: newUsername
    }, { withCredentials: true })
      .then(res => {
        setLoading(false)
        setMessage(res.data.message)
        setnewUsername('')
        setnewUsernameError('')
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
      <h2 className="text-blueI font-black text-xl sm:text-2xl">Cambiar Nombre de usuario</h2>
      <Input name='username' type='text' placeholder='Nombre de usuario nuevo' value={newUsername} onChange={handleChange} error={newUsernameError !== ''} errorMessage={newUsernameError} />
      <div className={`flex w-full justify-center ${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <div className={`flex w-full justify-center ${message === '' ? 'hidden' : ''}`}>
        <p className={`text-sm font-semibold text-center rounded-lg ${message === 'Nombre de usuario Cambiado' ? 'text-green-700 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-3`}>{message}</p>
      </div>
      <ButtonLogin text="Cambiar nombre de usuario" dark={true} disabled={loading} type="submit" />
    </form>
  )
}
 
export default ChangeUsername
