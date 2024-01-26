export function typeDateModelSeter (date: string) {
  // Obtener los datos de la fecha
  const dateParts = date.split('T')
  const dateArray = dateParts[0].split('-')
  const day = dateArray[2]
  const month = dateArray[1]
  const year = dateArray[0]

  // Devolver el objeto DateModel
  return {
    day,
    month,
    year
  }
}