
// Colores disponibles
const colores = ["green", "blue", "red"];

// Función para seleccionar un color aleatorio
function colorAleatorio() {
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

// Seleccionar todos los encabezados h5
const encabezados = document.querySelectorAll("h5");

// Agregar un evento click a cada h5
encabezados.forEach(function(encabezado) {
    encabezado.addEventListener("click", function() {
        encabezado.style.color = colorAleatorio();
    });
});
