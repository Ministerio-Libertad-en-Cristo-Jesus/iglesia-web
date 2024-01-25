export function typeDateSeter(fecha: Date) {
    let dia: string | number = fecha.getDate()
    let mes: string | number = fecha.getMonth() + 1 // Los meses en JavaScript empiezan en 0
    let año = fecha.getFullYear()

    // Asegurarse de que el día y el mes siempre tengan dos dígitos
    if (dia < 10) dia = '0' + dia
    if (mes < 10) mes = '0' + mes

    return dia + '/' + mes + '/' + año
}