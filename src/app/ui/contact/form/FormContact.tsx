'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { type FormMessageType } from '../../../lib/definitions'
import validate from './validates'
import SpinLoader from '../../../components/componentSVG/SpinLoader'

const FormContact = () => {
  const [form, setForm] = useState<FormMessageType>({
    from_name: 'Iglesia Pagina web',
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormMessageType>({
    from_name: '',
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  })

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  const templateContact = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT || ''
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

    setErrors(validate(
      {
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

      emailjs.send(serviceId, templateContact, {
        ...form,
        user_name: form.user_name.trim(),
        user_email: form.user_email.trim(),
        user_phone: form.user_phone.trim(),
        message: form.message.trim()
      }, 'X_NjgIH4yEWzWHeny')
        .then((result) => {
          setLoading(false)
          setResponse(result.text)
          setForm({
            ...form,
            user_name: '',
            user_email: '',
            user_phone: '',
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 w-full">
      <Input name='user_name' value={form.user_name} placeholder='Nombre' error={errors.user_name !== ''} errorMessage={errors.user_name} onChange={handleChange} type='text' />
      <div className='flex flex-col md:flex-row w-full gap-8 md:gap-8 justify-between'>
        <Input name='user_email' value={form.user_email} placeholder='Email' error={errors.user_email !== ''} errorMessage={errors.user_email} onChange={handleChange} type='email' />
        <Input name='user_phone' value={form.user_phone} placeholder='Teléfono' error={errors.user_phone !== ''} errorMessage={errors.user_phone} onChange={handleChange} type='tel' />
      </div>
      <TextArea name='message' value={form.message} placeholder='Mensaje' error={errors.message !== ''} errorMessage={errors.message} onChange={handleChange} />
      <div className={`${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <p
      className={`${messageAl !== '' ? '' : 'hidden'}  text-base text-center text-red-700`}>
        {messageAl === 'OK' ? '*Llena todos los campos' : '*Corrige los Errores'}
      </p>

      <p
      className={`${response !== '' ? '' : 'hidden'}  text-base text-center ${response === 'OK' ? 'text-green-600' : 'text-red-700'}`}>
        {response === 'OK' ? '*Se envió correctamente' : '*No se pudo enviar(Vuelve a intentar)'}
      </p>
      <button
      type='submit'
      className='w-full py-3 px-4  text-sm lg:text-base font-medium text-blueI rounded-lg bg-whiteI border-2 border-blueI hover:bg-blueI hover:text-whiteI transition-all duration-200'>
        Enviar Mensaje
      </button>
    </form>
  )
}

export default FormContact
