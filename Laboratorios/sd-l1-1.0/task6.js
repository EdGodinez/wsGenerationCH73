const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let resultados = [];

for (let i = 1; i <= 105; i++) {

  if (i % 15 === 0) {
    resultados.push("FizzBuzz");

  } else if (i % 3 === 0) {
    resultados.push("Fizz");

  } else if (i % 5 === 0) {
    resultados.push("Buzz");

  } else if (i % 7 === 0) {
    resultados.push("Woof");

  } else {
    resultados.push(i);
  }
}


rl.question(
  "Hola, qué deseas realizar?\n" +
  "1.- Imprimir una cantidad específica de líneas\n" +
  "2.- Imprimir una línea en específico\n" +
  "Opción: ",

  (opc) => {

    if (opc === "1") {

      rl.question(
        "Cuántas líneas deseas imprimir?: ",

        (cantidad) => {

          cantidad = Number(cantidad);

          if (cantidad >= 1 && cantidad <= resultados.length) {

            for (let i = 0; i < cantidad; i++) {
              console.log(resultados[i]);
            }

          } else {
            console.log("Cantidad no válida.");
          }

          rl.close();
        }
      );

    } else if (opc === "2") {

      rl.question(
        "Qué línea deseas imprimir?: ",

        (linea) => {

          linea = Number(linea);

          if (linea >= 1 && linea <= resultados.length) {

            console.log(resultados[linea - 1]);

          } else {
            console.log("Número de línea no válido.");
          }

          rl.close();
        }
      );

    } else {

      console.log("Opción no válida.");
      rl.close();
    }
  }
);