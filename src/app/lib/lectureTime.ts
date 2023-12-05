export const lectureTimeCalculator = (arrayDeStrings: string[], palabrasPorMinuto: number) => {
  // Verificar si se proporcionó la velocidad de lectura, de lo contrario, usar un valor predeterminado

  // Calcular el tiempo de lectura para cada cadena de texto en el array
  const tiemposDeLectura = arrayDeStrings.map(texto => {
    const palabras = texto.split(/\s+/).length // Dividir el texto en palabras
    const tiempoEnMinutos = palabras / palabrasPorMinuto // Calcular el tiempo en minutos
    return tiempoEnMinutos
  })

  return Math.ceil(tiemposDeLectura.reduce((a, b) => a + b, 0))
}
