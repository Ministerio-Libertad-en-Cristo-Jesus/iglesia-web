'use client'
import Input from "@/app/components/Input"
import React, { useState } from "react"
import InputPassword from "./InputPassword"
import SelectFilter from "@/app/components/SelectFilter"
import InputPhone from "@/app/components/InputPhone"
import ButtonLogin from "@/app/components/ButtonLogin"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import validate from "./validate"

const FormAddUser = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    role: '',
    password: 'MILibertadEnCristoJesus'
  })
  const [newUserErrors, setNewUserErrors] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    role: ''
  })
  const roleOptions = [{ value: 'lider', text: 'Lider'}, { value: 'pastor', text: 'Pastor' }]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setMessage('')
    setNewUser({
      ...newUser,
      [name]: value
    })
    setNewUserErrors(validate({
      ...newUser,
      [name]: value
    }))
  }

  const handleChangePhone = (value: string) => {
    setMessage('')
    setNewUser({ ...newUser, phone: value })
    setNewUserErrors(validate({
      ...newUser,
      phone: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')
    if(Object.values(newUser).some(x => x === '')) {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (Object.values(newUserErrors).some(x => x !== '')) {
      setMessage('*Verifica los errores')
      return
    }
    setLoading(true)
    axios.post('/api/createuser', {
      ...newUser,
      phone: `+${newUser.phone}`,
      name: newUser.name.trim(),
      username: newUser.username.trim().toLowerCase(),
      email: newUser.email.trim().toLowerCase(),
    }, { withCredentials: true })
      .then(res => {
        setNewUser({
          name: '',
          username: '',
          email: '',
          phone: '',
          role: '',
          password: 'MILibertadEnCristoJesus'
        })
        setMessage(res.data.message)
        setLoading(false)
      })
      .catch(err => {
        setMessage(err.response.data.message)
        setLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center flex-col gap-8">
      <div className="flex w-full gap-8">
        <Input name="name" placeholder="Nombre" value={newUser.name} error={false} errorMessage={newUserErrors.name} onChange={handleChange} type="text" />
        <Input name="username" placeholder="Nombre de usuario" value={newUser.username} error={false} errorMessage={newUserErrors.username} onChange={handleChange} type="text" />
      </div>

      <div className="flex w-full gap-8">
        <Input name="email" placeholder="Correo Electrónico" value={newUser.email} error={false} errorMessage={newUserErrors.email} onChange={handleChange} type="email" />
        <InputPhone placeholder="Teléfono" value={newUser.phone} onChange={handleChangePhone} errorMessage={newUserErrors.phone} />
      </div>

      <div className="flex w-full gap-8">
        <SelectFilter name="role" options={roleOptions} placeholder="Cargo" value={newUser.role} handleChange={handleChange} />
        <InputPassword name="password" value={newUser.password} placeholder="Contraseña por defecto" />
      </div>
      <div className={`${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <p className={`${message === '' ? 'hidden' : ''} text-sm font-medium text-center rounded-lg ${message === 'Usuario creado' ? 'text-green-800 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-1`}>{message}</p>
      <ButtonLogin text="Crear Usuario" dark={true} disabled={loading} type="submit" />
    </form>
  )
}
 
export default FormAddUser
