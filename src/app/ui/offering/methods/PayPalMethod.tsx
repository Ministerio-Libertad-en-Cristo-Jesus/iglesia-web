'use client'
import { useRouter } from 'next/navigation'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import { changeCheck } from '@/redux/features/checkoutSlice'
import { useAppDispatch } from '@/redux/store'
import { useState } from 'react'
import validate from './validate'

const PayPalMethod = () => {
  const [offeringPaypal, setOfferingPaypal] = useState({
    description: '',
    amount: '1'
  })
  const [errors, setErrors] = useState({
    description: '',
    amount: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [description, setDescription] = useState('')
  const options = ['Donación', 'Diezmo', 'Ofrenda']
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setErrorMessage('')
    switch (name) {
      case 'typePay':
        setDescription(value)
        break
      case 'description':
        setOfferingPaypal({
          ...offeringPaypal,
          description: value
        })
        setErrors(validate({
          ...offeringPaypal,
          description: value
        }))
        break
      case 'amount':
        setOfferingPaypal({
          ...offeringPaypal,
          amount: value
        })
        setErrors(validate({
          ...offeringPaypal,
          amount: value
        }))
        break
      default:
        break
    }
  }
  const handleClick = () => {
    if (offeringPaypal.amount === '' || description[1] === '') {
      setErrorMessage('Llena todos los campos*')
    } else if (Object.values(errors).some(x => x !== '')) {
      setErrorMessage('Verifica los errores*')
    } else if (description[0] === '') {
      setErrorMessage('Selecciona un tipo de pago*')
    } else {
      dispatch(changeCheck({ amountCheck: offeringPaypal.amount, descriptionCheck: offeringPaypal.description, payType: description }))
      router.push('/offering/checkoutpaypal')
    }
  }
  return (
    <div className='flex flex-col w-full gap-8'>
      <div>
        <h3 className='font-noto font-bold text-xl sm:text-2xl text-blueI'>PayPal o Credit Card</h3>
        <p className='font-noto text-sm sm:text-base text-blueI'>Llena todos los campos*</p>
      </div>
      <div className='flex flex-col sm:flex-row w-full gap-8'>
        <Select options={options} placeholder='Tipo de pago' name='typePay' value={description} handleChange={handleChange} />
        <Input name='amount' placeholder='Cantidad $' value={offeringPaypal.amount} min='1' onChange={handleChange} error={false} errorMessage={errors.amount} type='number' />
      </div>
      <Input name='description' placeholder='Descripción' value={offeringPaypal.description} onChange={handleChange} error={false} errorMessage={errors.description} type='text' />
      <p className={`font-not text-sm text-red-800 text-center ${errorMessage === '' ? 'hidden' : ''}`}>{errorMessage}</p>
      <button
      onClick={handleClick}
      className='w-full py-3 px-4 font-noto text-sm lg:text-base font-medium text-blueI rounded-lg bg-whiteI border-2 border-blueI hover:bg-blueI hover:text-whiteI transition-all duration-200'>
        Pagar con Paypal
      </button>
    </div>
  )
}

export default PayPalMethod
