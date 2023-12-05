'use client'
import { useState } from 'react'
import Input from '../../../components/Input'
import emailjs from '@emailjs/browser'
import Select from '../../../components/Select'
import { Country } from 'country-state-city'
import TextArea from '../../../components/TextArea'
import { getOldDate } from '../../../lib/getOldDate'
import { type FormPrayerType } from '../../../lib/definitions'
import validate from './validates'
import SpinLoader from '../../../components/componentSVG/SpinLoader'

const FormPrayer = () => {
  const countries = Country.getAllCountries()
  const nameCountries = countries.map(country => country.name)
  const maritalStatus = ['Soltero', 'Casado', 'Unido', 'Divorciado', 'Separado', 'Viudo']
  const prayerType = ['Sanidad', 'Matrimonio', 'Familia', 'Finanzas', 'Liberación', 'Otro']

  const [form, setForm] = useState<FormPrayerType>({
    from_name: 'Iglesia Pagina web',
    user_name: '',
    user_email: '',
    country: '',
    gender: '',
    birthday: '',
    type: '',
    marital_status: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormPrayerType>({
    from_name: '',
    user_name: '',
    user_email: '',
    country: '',
    gender: '',
    birthday: '',
    type: '',
    marital_status: '',
    message: ''
  })

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  const templatePrayer = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_PRAYER || ''
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [messageAl, setMessageAl] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setMessageAl('')
    setResponse('')

    setForm({
      ...form,
      [name]: value
    })

    setErrors(validate({
      ...form,
      [name]: value
    }))
  }

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (Object.values(form).some(x => x === '')) {
      setMessageAl('OK')
    } else if (Object.values(errors).some(x => x !== '')) {
      setMessageAl('NO')
    } else {
      setLoading(true)
      setResponse('')

      emailjs.send(serviceId, templatePrayer, {
        ...form,
        user_name: form.user_name.trim(),
        user_email: form.user_email.trim(),
        message: form.message.trim()
      }, 'X_NjgIH4yEWzWHeny')
        .then((result) => {
          setLoading(false)
          setResponse(result.text)
          setForm({
            ...form,
            user_name: '',
            user_email: '',
            gender: '',
            country: '',
            birthday: '',
            type: '',
            marital_status: '',
            message: ''
          })
        })
        .catch((error) => {
          setLoading(false)
          setResponse(error.text)
        })
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
      <Input type='text' name='user_name' value={form.user_name} placeholder='Nombre' error={false} errorMessage={errors.user_name} onChange={handleChange} />
      <Input type='email' name='user_email' value={form.user_email} placeholder='Email' error={false} errorMessage={errors.user_email} onChange={handleChange} />
      <Input type='date' name='birthday' min='1915-01-01' max={getOldDate()} value={form.birthday} placeholder='Fecha de nacimiento' error={false} errorMessage={errors.birthday} onChange={handleChange} />
      <div className='flex flex-col md:flex-row w-full gap-8 md:gap-8 justify-between'>
        <Select name='country' value={form.country} handleChange={handleChange} options={nameCountries} placeholder='Selecciona tu país' />
        <Select name='gender' value={form.gender} handleChange={handleChange} options={['Masculino', 'Femenino']} placeholder='Selecciona tu género' />
      </div>
      <div className='flex flex-col md:flex-row w-full gap-8 md:gap-8 justify-between'>
        <Select name='marital_status' value={form.marital_status} handleChange={handleChange} options={maritalStatus} placeholder='Estado Civil' />
        <Select name='type' value={form.type} handleChange={handleChange} options={prayerType} placeholder='Tipo de Petición' />
      </div>
      <TextArea name='message' value={form.message} placeholder='Petición' error={errors.message !== ''} errorMessage={errors.message} onChange={handleChange} />
      <div className={`${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <p
      className={`${messageAl !== '' ? '' : 'hidden'} text-base text-center text-red-700`}>
        {messageAl === 'OK' ? '*Llena todos los campos' : '*Corrige los Errores'}
      </p>

      <p
      className={`${response !== '' ? '' : 'hidden'} text-base text-center ${response === 'OK' ? 'text-green-600' : 'text-red-700'}`}>
        {response === 'OK' ? '*Se envió correctamente' : '*No se pudo enviar(Vuelve a intentar)'}
      </p>
      <button
      type='submit'
      className='w-full py-3 px-4 font-noto text-sm lg:text-base font-medium text-blueI rounded-lg bg-whiteI border-2 border-blueI hover:bg-blueI hover:text-whiteI transition-all duration-200'>
        Enviar Petición
      </button>
    </form>
  )
}

export default FormPrayer
