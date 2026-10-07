// Cambiar el primer Hello World
document.getElementById("firstHello").textContent = "GoodBye";


// Cambiar un encabezado a naranja
document.getElementById("orangeHeader").style.color = "orange";


// Cambiar a café al hacer clic
document.getElementById("clickableHeader").addEventListener("click", function() {
  document.getElementById("clickableHeader").style.color = "brown";
});


// Efecto 3D en la imagen
VanillaTilt.init(document.getElementById("lion"), {
  max: 20,
  speed: 400,
  scale: 1.05,
  glare: true,
  "max-glare": 0.4
});