const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obtenerLinea(i) {

  let resultado = "";

  if (i % 3 === 0) {
    resultado += "Fizz";
  }

  if (i % 5 === 0) {
    resultado += "Buzz";
  }

  if (i % 7 === 0) {
    resultado += "Woof";
  }

  if (resultado === "") {
    return i;
  } else {
    return resultado;
  }
}

rl.question(
  "Hola, ¿qué deseas realizar?\n" +
  "1.- Imprimir cantidad de líneas específica\n" +
  "2.- Imprimir una línea en específico\n" +
  "Opción: ",

  (opc) => {

    if (opc === "1") {

      rl.question(
        "¿Cuántas líneas deseas imprimir?: ",

        (cantidad) => {

          cantidad = Number(cantidad);

          for (let i = 1; i <= cantidad; i++) {
            console.log(obtenerLinea(i));
          }

          rl.close();
        }
      );

    } else if (opc === "2") {

      rl.question(
        "¿Qué línea deseas imprimir?: ",

        (linea) => {

          linea = Number(linea);

          console.log(obtenerLinea(linea));

          rl.close();
        }
      );

    } else {

      console.log("Opción no válida.");
      rl.close();
    }
  }
);