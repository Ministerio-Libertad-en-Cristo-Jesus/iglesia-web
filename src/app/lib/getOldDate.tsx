export const getOldDate = () => {
  const fechaActual = new Date()
  fechaActual.setFullYear(fechaActual.getFullYear() - 18)

  const year = fechaActual.getFullYear()
  const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0')
  const day = fechaActual.getDate().toString().padStart(2, '0')

  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return year + '-' + month + '-' + day
}
