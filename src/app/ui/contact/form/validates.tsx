import { type FormMessageType } from '../../../lib/definitions'

const nameRegex = /^[a-zA-Z\s]*$/
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const phoneRegex = /^[0-9+]+$/

const validate = (inputs: FormMessageType) => {
  const errors: FormMessageType = {
    from_name: '',
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  }

  //  VALIDATIONS USER_NAME
  if (!nameRegex.test(inputs.user_name)) errors.user_name = '*No números o caracteres especiales'
  if (inputs.user_name.length > 50) errors.user_name = '*Máximo 50 caracteres'
  if (inputs.user_name.length < 4) errors.user_name = '*Mínimo 4 caracteres'
  if (inputs.user_name === '') errors.user_name = ''

  //  VALIDATIONS USER_EMAIL
  if (!emailRegex.test(inputs.user_email)) errors.user_email = '*Ingresa un mail valido'
  if (inputs.user_email.length > 50) errors.user_email = '*Máximo 50 caracteres'
  if (inputs.user_email.length < 10) errors.user_email = '*Mínimo 10 caracteres'
  if (inputs.user_email === '') errors.user_email = ''

  //  VALIDATIONS phone
  if (!phoneRegex.test(inputs.user_phone)) errors.user_phone = '*Teléfono no valido'
  if (inputs.user_phone.length < 9) errors.user_phone = '*Mínimo 9 números'
  if (inputs.user_phone === '') errors.user_phone = ''

  //  VALIDATIONS MESSAGE
  if (inputs.message.length > 800) errors.message = '*Máximo 800 caracteres'
  if (inputs.message.length < 20) errors.message = '*Mínimo 20 caracteres'
  if (inputs.message === '') errors.message = ''

  return errors
}

export default validate
