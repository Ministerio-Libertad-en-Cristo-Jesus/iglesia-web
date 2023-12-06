interface PayPalType {
  amount: string
  description: string
}

const validate = (inputs: PayPalType) => {
  const errors: PayPalType = {
    amount: '',
    description: ''
  }
  //  VALIDATIONS AMOUNT
  if (parseInt(inputs.amount) < 1) errors.amount = '*El monto debe ser mayor a 0'
  if (parseInt(inputs.amount) > 99999) errors.amount = '*El monto debe ser menor a 100000'
  if (inputs.amount === '') errors.amount = ''

  //  VALIDATIONS DESCRIPTION
  if (inputs.description.length > 200) errors.description = '*Máximo 200 caracteres'
  if (inputs.description.length < 10) errors.description = '*Mínimo 10 caracteres'
  if (inputs.description === '') errors.description = ''

  return errors
}

export default validate
