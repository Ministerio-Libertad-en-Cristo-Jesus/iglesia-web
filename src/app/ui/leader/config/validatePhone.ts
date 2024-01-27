const phoneRegex = /^\+?[0-9]{1,3}[ -.]?[0-9]{1,15}$/

export function validatePhone (phone: string) {
  let error = ''

  //  VALIDATIONS phone
  if (!phoneRegex.test(phone)) error = '*Teléfono no valido'
  if (phone.length < 9) error = '*Mínimo 9 números'
  if (phone === '') error = ''

  return error
}