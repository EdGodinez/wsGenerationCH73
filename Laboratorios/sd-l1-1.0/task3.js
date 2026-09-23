for (let i = 1; i <= 106; i++) {

  let resultado = "";

  if (i % 3 === 0) {
    resultado += "Fizz";
  }

  if (i % 5 === 0) {
    resultado += "Buzz";
  }

  if (resultado === "") {
    console.log(i);
  } else {
    console.log(resultado);
  }
}