
const entrada1 = window.prompt("Ingresa el primer número:");
const entrada2 = window.prompt("Ingresa el segundo número:");
const entrada3 = window.prompt("Ingresa el tercer número:");

//Elementos del DOM
const resultadoDescendente = document.getElementById("descendente");
const resultadoAscendente = document.getElementById("ascendente");
const comparacion = document.getElementById("comparacion");

if (
    entrada1 === null || entrada1.trim() === "" || !Number.isFinite(Number(entrada1)) ||
    entrada2 === null || entrada2.trim() === "" || !Number.isFinite(Number(entrada2)) ||
    entrada3 === null || entrada3.trim() === "" || !Number.isFinite(Number(entrada3))
) {
    console.log("Debes ingresar un numeros validos");
    window.alert("⚠️ Debes ingresar tres números válidos.");
    comparacion.textContent = "Error: debes ingresar tres números válidos.";

} else {
    const num1 = Number(entrada1);
    const num2 = Number(entrada2);
    const num3 = Number(entrada3);

    let mayor;
    let intermedio;
    let menor;
    let mensajeNumerosIguales;

    console.log(num1, num2, num3);

    //Encontrar el numero mayor
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1, "Es el numero mayor");
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2, "Es el numero mayor");
        mayor = num2;
    } else {
        console.log(num3, "Es el numero mayor");
        mayor = num3;
    }

    //Encontrar el numero menor
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1, "Es el numero menor");
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2, "Es el numero menor");
        menor = num2;
    } else {
        console.log(num3, "Es el numero menor");
        menor = num3;
    }

    //Encontrar valor intermedio
    if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
        console.log(num1, "Es el número intermedio");
        intermedio = num1;

    } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
        console.log(num2, "Es el número intermedio");
        intermedio = num2;
    }  else {
        console.log(num3, "Es el número intermedio");
        intermedio = num3;
    }

    //Validar números iguales
    if (num1 === num2 && num1 === num3) {
        console.log("Los tres números son iguales");
        mensajeNumerosIguales = "Los tres numeros son iguales";

    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        console.log("Hay dos números iguales");
        mensajeNumerosIguales = "Hay 2 numeros iguales";

    } else {
        console.log("Todos los números son diferentes");
        mensajeNumerosIguales = "Los 3 numeros son diferentes";
    }

    resultadoDescendente.textContent = `${mayor}, ${intermedio}, ${menor}`;
    resultadoAscendente.textContent = `${menor}, ${intermedio}, ${mayor}`
    comparacion.textContent = mensajeNumerosIguales;
}












