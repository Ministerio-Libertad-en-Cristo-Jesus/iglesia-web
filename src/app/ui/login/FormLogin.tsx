import ButtonLogin from "@/app/components/ButtonLogin"
import { type Dispatch, type SetStateAction } from 'react'
import Input from "@/app/components/Input"
import { UserLogin } from "@/app/lib/definitions"
import validate from "./validate"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"

interface Props {
  user: UserLogin
  errorUser: UserLogin
  message: string
  loading: boolean
  setMessage: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<UserLogin>>
  setErrorUser: Dispatch<SetStateAction<UserLogin>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormLogin = ({ user, errorUser, setUser, setErrorUser, message, loading, setMessage, handleSubmit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMessage('')
    setUser({
      ...user,
      [name]: value
    })
    setErrorUser(validate({
      ...user,
      [name]: value
    }))
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-6">
      <Input name="email" placeholder="Correo Electrónico" value={user.email} error={false} errorMessage={errorUser.email} onChange={handleChange} type="email" />
      <Input name="password" placeholder="Contraseña" value={user.password} error={false} errorMessage={errorUser.password} onChange={handleChange} type="password"  />
      <div className={`${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <p className={`${message === '' ? 'hidden' : ''} text-sm font-medium text-center rounded-lg text-red-800 bg-red-300 py-1 px-1`}>{message}</p>
      <ButtonLogin type="submit" disabled={false} text="Iniciar Sesión" dark={true} />
    </form>
  )
}
 
export default FormLogin