'use client'
import { useState } from "react"
import ButtonLogin from "@/app/components/ButtonLogin"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { useRouter } from "next/navigation"
import { validateName } from "./validateName"
import Input from "@/app/components/Input"

const ChangeName = () => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const [newName, setNewName] = useState('')
  const [newNameError, setNewNameError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setMessage('')
    setNewName(value)
    setNewNameError(validateName(value))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')

    if(newName === '') {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (newNameError !== '') {
      setMessage('*Verifica los errores')
      return
    }

    setLoading(true)
    axios.put('/api/changename', {
      newName: newName
    }, { withCredentials: true })
      .then(res => {
        setLoading(false)
        setMessage(res.data.message)
        setNewName('')
        setNewNameError('')
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
      <h2 className="text-blueI font-black text-xl sm:text-2xl">Cambiar Nombre</h2>
      <Input name='name' type='text' placeholder='Nombre nuevo' value={newName} onChange={handleChange} error={newNameError !== ''} errorMessage={newNameError} />
      <div className={`flex w-full justify-center ${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <div className={`flex w-full justify-center ${message === '' ? 'hidden' : ''}`}>
        <p className={`text-sm font-semibold text-center rounded-lg ${message === 'Nombre Cambiado' ? 'text-green-700 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-3`}>{message}</p>
      </div>
      <ButtonLogin text="Cambiar nombre" dark={true} disabled={loading} type="submit" />
    </form>
  )
}
 
export default ChangeName
