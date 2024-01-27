const nameRegex = /^[a-zA-Z\s]*$/

export function validateName (name: string) {
  let error = ''
  //  VALIDATIONS NAME
  if (!nameRegex.test(name)) error = '*No números o caracteres especiales'
  if (name.length > 50) error = '*Máximo 50 caracteres'
  if (name.length < 4) error = '*Mínimo 4 caracteres'
  if (name === '') error = ''

  return error
}