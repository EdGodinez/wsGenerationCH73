export function ageCalculator(anio, mes, dia) {

    const fechaActual = new Date();

    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();

    let edad = anioActual - anio - 1;

    if (mes < mesActual) {
        edad++;
    } else if (mes === mesActual && dia <= diaActual) {
        edad++;
    }

    return edad;
}