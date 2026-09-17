def addmultiplenumbers(lista):
  sumaTotal = 0

  for i in lista:
    sumaTotal += i;

  return sumaTotal;

  #Solución más directa: return sum(lista)


def multiplymultiplenumbers(lista):
  multiTotal = 1

  for i in lista:
    multiTotal *= i

  return multiTotal;


def isiteven(num):
  return ((num % 2 == 0) and (num % 1 == 0))
  


def isitaninteger(num):
  return (num % 1 == 0)


def main():
  print("Hola estudiantes!")


if __name__ == "__main__":
  main()


