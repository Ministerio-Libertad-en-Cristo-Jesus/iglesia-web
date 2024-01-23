const nameRegex = /^[a-zA-Z\s]*$/
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const usernameRegex = /^[a-z]+$/
const phoneRegex = /^\+?[0-9]{1,3}[ -.]?[0-9]{1,15}$/

interface Props {
  name: string
  username: string
  email: string
  role: string
  phone: string
  password: string
}

const validate = (inputs: Props) => {
  const errors = {
    name: '',
    username: '',
    email: '',
    phone: '',
    role: ''
  }

  //  VALIDATIONS NAME
  if (!nameRegex.test(inputs.name)) errors.name = '*No números o caracteres especiales'
  if (inputs.name.length > 50) errors.name = '*Máximo 50 caracteres'
  if (inputs.name.length < 4) errors.name = '*Mínimo 4 caracteres'
  if (inputs.name === '') errors.name = ''

  //  VALIDATIONS USERNAME
  if (!usernameRegex.test(inputs.username)) errors.username = '*Solo minusculas'
  if (inputs.username.length > 20) errors.username = '*Máximo 20 caracteres'
  if (inputs.username.length < 4) errors.username = '*Mínimo 4 caracteres'
  if (inputs.username === '') errors.username = ''

  //  VALIDATIONS USER_EMAIL
  if (!emailRegex.test(inputs.email)) errors.email = '*Ingresa un mail valido'
  if (inputs.email.length > 50) errors.email = '*Máximo 50 caracteres'
  if (inputs.email.length < 10) errors.email = '*Mínimo 10 caracteres'
  if (inputs.email === '') errors.email = ''

  //  VALIDATIONS phone
  if (!phoneRegex.test(inputs.phone)) errors.phone = '*Teléfono no valido'
  if (inputs.phone.length < 9) errors.phone = '*Mínimo 9 números'
  if (inputs.phone === '') errors.phone = ''

  return errors
}

export default validate
