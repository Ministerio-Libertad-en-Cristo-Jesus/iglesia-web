'use client'
import { useState } from "react"
import { validate } from "./validate"
import InputChangePassword from "./InputChangePassword"
import ButtonLogin from "@/app/components/ButtonLogin"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { useRouter } from "next/navigation"

const ChangePassword = () => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const [newPassword, setNewPassword] = useState({
    newpassword: "",
    repeatnewpassword: ""
  })
  const [newPasswordError, setNewPasswordError] = useState({
    newpassword: "",
    repeatnewpassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMessage('')
    setNewPassword({
      ...newPassword,
      [name]: value
    })
    setNewPasswordError(validate({
      ...newPassword,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')
    const statusPassword = ['Aceptable', 'Segura']

    if(Object.values(newPassword).some(x => x === '')) {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (Object.values(newPasswordError).some(x => x !== '' && !statusPassword.includes(x))) {
      setMessage('*Verifica los errores')
      return
    }

    setLoading(true)
    axios.post('/api/changepassword', {
      newPassword: newPassword.newpassword
    }, { withCredentials: true })
      .then(res => {
        setLoading(false)
        setMessage(res.data.message)
        setNewPassword({
          newpassword: "",
          repeatnewpassword: ""
        })
        setNewPasswordError({
          newpassword: "",
          repeatnewpassword: ""
        })
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
      <h2 className="text-blueI font-black text-xl sm:text-2xl">Cambiar Contraseña</h2>
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 md:gap-8">
        <InputChangePassword
          name="newpassword"
          value={newPassword.newpassword}
          placeholder="Nueva contraseña"
          error={newPasswordError.newpassword !== '' && newPasswordError.newpassword !== 'Aceptable' && newPasswordError.newpassword !== 'Segura'}
          errorMessage={newPasswordError.newpassword}
          type="text"
          onChange={handleChange}
        />

        <InputChangePassword
          name="repeatnewpassword"
          value={newPassword.repeatnewpassword}
          placeholder="Repita la contraseña"
          error={newPasswordError.repeatnewpassword !== ''}
          errorMessage={newPasswordError.repeatnewpassword}
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className={`flex w-full justify-center ${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <div className={`flex w-full justify-center ${message === '' ? 'hidden' : ''}`}>
        <p className={`text-sm font-semibold text-center rounded-lg ${message === 'Contraseña Cambiada' ? 'text-green-700 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-3`}>{message}</p>
      </div>
      <ButtonLogin text="Cambiar contraseña" dark={true} disabled={false} type="submit" />
    </form>
  )
}
 
export default ChangePassword