import { type DateModel } from '../types/types'

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

export const dateSeter = (date: DateModel) => {
  return `${date.day} de ${months[date.month - 1]} del ${date.year}`
}
