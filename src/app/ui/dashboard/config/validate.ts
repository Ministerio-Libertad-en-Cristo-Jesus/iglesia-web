function securePassword (password: string) {
  // Requisitos mínimos de seguridad de la password
  const tieneMayuscula = /[A-Z]/.test(password)
  const tieneMinuscula = /[a-z]/.test(password)
  const tieneNumero = /\d/.test(password)
  const tieneCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)

  // Verificar si la password cumple con los requisitos mínimos
  const complejidadBaja1 = tieneMinuscula && !tieneMayuscula && !tieneCaracterEspecial
  const complejidadBaja2 = tieneNumero && !tieneMayuscula && !tieneCaracterEspecial
  const complejidadBaja3 = tieneNumero && tieneMayuscula && !tieneCaracterEspecial && !tieneMinuscula
  const complejidadBaja4 = !tieneNumero && tieneMayuscula && !tieneCaracterEspecial && tieneMinuscula
  const complejidadBaja5 = tieneNumero && !tieneMayuscula && tieneCaracterEspecial && !tieneMinuscula
  const complejidadBaja6 = !tieneNumero && !tieneMayuscula && tieneCaracterEspecial && tieneMinuscula
  const complejidadMedia = tieneMinuscula && tieneNumero && tieneMayuscula && !tieneCaracterEspecial
  const complejidadMedia2 = tieneMinuscula && tieneNumero && !tieneMayuscula && tieneCaracterEspecial
  const complejidadMedia3 = tieneMinuscula && !tieneNumero && tieneMayuscula && tieneCaracterEspecial
  const complejidadMedia4 = !tieneMinuscula && tieneNumero && tieneMayuscula && tieneCaracterEspecial
  const complejidadAlta = tieneMinuscula && tieneNumero && tieneMayuscula && tieneCaracterEspecial

  return complejidadBaja1 || complejidadBaja2 || complejidadBaja3 || complejidadBaja4 || complejidadBaja5 || complejidadBaja6 ? 'Insegura' : complejidadMedia || complejidadMedia2 || complejidadMedia3 || complejidadMedia4 ? 'Aceptable' : complejidadAlta ? 'Segura' : ''
}

interface Errors {
  newpassword: string
  repeatnewpassword: string
}

export const validate = ({ newpassword, repeatnewpassword }: Errors) => {
  const errors: Errors = { newpassword: '', repeatnewpassword: '' }

  // VALIDACIONES PARA LA CONTRASEÑA
  if (newpassword.length < 8) errors.newpassword = 'Almenos 8 caracteres'
  if (newpassword.length >= 8) errors.newpassword = securePassword(newpassword)
  if (newpassword.length === 0) errors.newpassword = ''

  // VALIDACIONES PARA LA VALIDACIÓN DE CONTRASEÑA
  if (repeatnewpassword !== newpassword) errors.repeatnewpassword = 'Las contraseñas deben coincidir'
  if (repeatnewpassword.length === 0) errors.repeatnewpassword = ''

  return errors
}
