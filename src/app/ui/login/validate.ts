import { UserLogin } from "@/app/lib/definitions"

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const validate = (inputs: UserLogin) => {
  const errors: UserLogin = {
    email: '',
    password: '',
  }

  //  VALIDATIONS USER_EMAIL
  if (!emailRegex.test(inputs.email)) errors.email = '*Ingresa un mail valido'
  if (inputs.email.length > 60) errors.email = '*Máximo 60 caracteres'
  if (inputs.email.length < 10) errors.email = '*Mínimo 10 caracteres'
  if (inputs.email === '') errors.email = ''

  //  VALIDATIONS password
  if (inputs.password.length > 60) errors.password = '*Máximo 60 caracteres'
  if (inputs.password.length < 6) errors.password = '*Mínimo 6 caracteres'
  if (inputs.password === '') errors.password = ''

  return errors
}

export default validate