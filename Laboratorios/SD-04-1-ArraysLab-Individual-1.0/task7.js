const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  //Añadir un unico numero a una fila
  arr[0].push(10);
  
  //Añadir nueva fila de numero
  arr.push([30, 31, 32, 33]);

  //Eliminar un unico numero de una fila
  arr[1].splice(0, 1); //Eliminamos el número 10 de la segunda fila

  //Invertir unicamente una fila:
  arr[3].reverse();

  console.log(arr)
  
  // Type your code above this line!