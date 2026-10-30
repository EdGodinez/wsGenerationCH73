const formulario = document.getElementById("formTemperatura");
const inputCelsius = document.getElementById("gradosCelsius");

const resultadoKelvin = document.getElementById("resultadoKelvin")
const resultadoFahrenheit = document.getElementById("resultadoFahrenheit");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const celsius = Number(inputCelsius.value);

    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 1.8) + 32;

resultadoKelvin.textContent = `Temperatura en grados Kelvin: ${kelvin.toFixed(2)} K`;
resultadoFahrenheit.textContent = `Temperatura en grados Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

})
