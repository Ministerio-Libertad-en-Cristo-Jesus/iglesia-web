interface Props {
  title: string
  content: string
  author: string
  type: string
}

const validate = (inputs: Props) => {
  const errors = {
    title: '',
    content: '',
    author: '',
    type: ''
  }

  //  VALIDATIONS TITLE
  if (inputs.title.length > 100) errors.title = '*Máximo 100 caracteres'
  if (inputs.title.length < 15) errors.title = '*Mínimo 15 caracteres'
  if (inputs.title === '') errors.title = ''

  //  VALIDATIONS CONTENT
  if (inputs.content.length < 500) errors.content = '*Mínimo 500 caracteres'
  if (inputs.content === '') errors.content = ''

  //  VALIDATIONS AUTHOR
  if (inputs.author.length > 80) errors.author = '*Máximo 80 caracteres'
  if (inputs.author.length < 4) errors.author = '*Mínimo 4 caracteres'
  if (inputs.author === '') errors.author = ''

  return errors
}

export default validate
