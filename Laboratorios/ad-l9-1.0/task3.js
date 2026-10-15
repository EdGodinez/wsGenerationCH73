
function mostrarEnlaces() {
  const enlaces = document.querySelectorAll("a");

  const total = enlaces.length;
  const primerEnlace = enlaces[0].href;
  const ultimoEnlace = enlaces[enlaces.length - 1].href;

  alert(
    "Número de enlaces: " + total +
    "\nPrimer enlace: " + primerEnlace +
    "\nÚltimo enlace: " + ultimoEnlace
  );
}
