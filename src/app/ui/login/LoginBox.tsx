'use client'
import LogoVersion2 from "@/app/components/componentSVG/LogoVersion2"
import RoleSelector from "./RoleSelector"
import { useState } from "react"
import FormLogin from "./FormLogin"
import Link from "next/link"
import { UserLogin } from "@/app/lib/definitions"

const LoginBox = () => {
  const [role, setRole] = useState('pastor')
  const [user, setUser] = useState<UserLogin>({
    email: '',
    password: ''
  })
  const [errorUser, setErrorUser] = useState<UserLogin>({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if(Object.values(user).some(x => x === '')) {
      setMessage('*Todos los campos son obligatorios')
      setLoading(false)
    } else if (Object.values(errorUser).some(x => x !== '')) {
      setMessage('*Verifica los errores')
      setLoading(false)
    }
  }
  return (
    <section className="flex flex-col w-full min-h-full items-center py-20 px-8 sm:px-24 justify-between">
      <div className="flex w-full flex-col items-center gap-7">
        <LogoVersion2 />
        <div>
          <h3 className="font-black text-blueI text-4xl text-center">¡Bienvenido!</h3>
          <p className="text-gray-600 text-sm text-center">Ingresa tus datos</p>
        </div>
        <RoleSelector role={role} setRole={setRole} />
        <FormLogin user={user} setUser={setUser} errorUser={errorUser} setErrorUser={setErrorUser} handleSubmit={handleSubmit} message={message} loading={loading} setMessage={setMessage} />
      </div>
      <p className="text-blueI text-sm sm:text-base mt-10 text-center">¿Quieres regresar al inicio? <Link className="font-bold text-blueI underline" href='/' >Inicio</Link></p>
    </section>
  )
}
 
export default LoginBox