const validate = (inputs: { title: string, description: string, importance:string }) => {
  const errors = {
    title: '',
    description: '',
    importance: '',
  }

  //  VALIDATIONS TITLE
  if (inputs.title.length > 60) errors.title = '*Máximo 60 caracteres'
  if (inputs.title.length < 10) errors.title = '*Mínimo 10 caracteres'
  if (inputs.title === '') errors.title = ''

  //  VALIDATIONS DESCRIPTION
  if (inputs.description.length > 120) errors.description = '*Máximo 120 caracteres'
  if (inputs.description.length < 15) errors.description = '*Mínimo 15 caracteres'
  if (inputs.description === '') errors.description = ''

  return errors
}

export default validate
