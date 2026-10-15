
// Paso 1: Seleccionar la sección con id "container".
const contenedor = document.getElementById("container");
console.log(contenedor);

// Paso 2: Seleccionar todos los li con clase "second".
const elementosSecond = document.querySelectorAll("li.second");
console.log(elementosSecond);

// Paso 3: Seleccionar el li.third dentro de ol.
const tercerElemento = document.querySelector("ol li.third");
console.log(tercerElemento);

// Paso 4: Asignar "Hello!" al contenedor.
function cambiarTextoContenedor() {
  contenedor.textContent = "Hello!";
}

// Seleccionar el footer.
const footer = document.querySelector("div.footer");

// Paso 5: Agregar la clase main.
footer.classList.add("main");
console.log("Clase main agregada:", footer.classList.contains("main"));

// Paso 6: Eliminar la clase main.
footer.classList.remove("main");
console.log("Clase main eliminada:", !footer.classList.contains("main"));

// Paso 7: Crear un nuevo elemento li.
const nuevoElemento = document.createElement("li");
console.log(nuevoElemento);

// Paso 8: Asignarle el texto "four" e insertarlo en ul.
nuevoElemento.textContent = "four";

const lista = document.querySelector("ul");
lista.append(nuevoElemento);
