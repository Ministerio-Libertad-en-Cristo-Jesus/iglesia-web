const usernameRegex = /^[a-z]+$/

export function validateUsername (username: string) {
  let error = ''

  //  VALIDATIONS USERNAME
  if (!usernameRegex.test(username)) error = '*Solo minusculas'
  if (username.length > 20) error = '*Máximo 20 caracteres'
  if (username.length < 4) error = '*Mínimo 4 caracteres'
  if (username === '') error = ''

  return error
}
