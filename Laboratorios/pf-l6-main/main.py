def trivia_fetch(num):
  trivia = {
    1: {
      "number": num,
      "pregunta": "¿Cuál es la capital de Francia?",
      "respuesta": "paris"
    },
    2: {
      "number": num,
      "pregunta": "Cuál es la respuesta a la vida, el universo y todo?",
      "respuesta": "42"
    },
    3: {
      "number": num,
      "pregunta": "¿Qué lenguaje estamos usando en este laboratorio?",
      "respuesta": "python"
    },
    4: {
      "number": num,
      "pregunta": "¿Cuantos metros son 1 Km",
      "respuesta": "1000"
    }
  }

  return trivia.get(num, {
    "number": num,
    "pregunta": "Número de pregunta no disponible",
    "respuesta": ""
  })



def main():
    nombre = input("Ingresa tu nombre: ")
    print("Hola,", nombre, "! Empecemos la trivia")

    puntaje = 0

    for numero in range(1, 5):
      
      trivia = trivia_fetch(numero)

      print("\nPregunta", numero)
      print(trivia["pregunta"])

      respuesta_usuario = input("Tu respuesta: ").lower()

      if respuesta_usuario == trivia["respuesta"]:
        print("¡Correcto!")
        puntaje += 1
      else:
        print("Incorrecto.")
        print("La respuesta correcta era:", trivia["respuesta"])
        
    print("\nTrivia terminada")
    print(f"Felicidades {nombre}! Tu puntaje fue: {puntaje} de 4")


if __name__=="__main__":
  main()