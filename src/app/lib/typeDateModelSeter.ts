export function typeDateModelSeter (date: string) {
  // Obtener los datos de la fecha
  const dateParts = date.split('T')
  const dateArray = dateParts[0].split('-')
  const day = parseInt(dateArray[2])
  const month = parseInt(dateArray[1])
  const year = parseInt(dateArray[0])

  // Devolver el objeto DateModel
  return {
    day,
    month,
    year
  }
}