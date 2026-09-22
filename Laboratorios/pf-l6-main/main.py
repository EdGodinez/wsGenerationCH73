import requests
import html
import random


def trivia_fetch(num):
    url = f"https://opentdb.com/api.php?amount={num}"
    response = requests.get(url)
    trivia = response.json()
    return trivia


def main():
    nombre = input("¡Bienvenido al juego de trivia! ¿Cuál es tu nombre? ")
    cantidad = int(input("¿Cuántas preguntas quieres? "))
    trivia = trivia_fetch(cantidad)

    puntaje = 0
    numero_pregunta = 1

    for pregunta in trivia["results"]:
        texto_pregunta = html.unescape(pregunta["question"])
        respuesta_correcta = html.unescape(pregunta["correct_answer"])

        opciones = [html.unescape(op) for op in pregunta["incorrect_answers"]]
        opciones.append(respuesta_correcta)
        random.shuffle(opciones)

        print(f"\nPregunta {numero_pregunta}: {texto_pregunta}")

        for i, opcion in enumerate(opciones, start=1):
            print(f"{i}. {opcion}")

        respuesta_usuario = int(input("Elige una opción: "))
        opcion_elegida = opciones[respuesta_usuario - 1]

        if opcion_elegida == respuesta_correcta:
            print("✅ ¡Correcto!")
            puntaje += 1
        else:
            print("❌ Incorrecto.")
            print(f"La respuesta correcta era: {respuesta_correcta}")

        numero_pregunta += 1

    print(f"\n Felicidades {nombre}! Tu puntaje final es: {puntaje}/{cantidad}")


if __name__ == "__main__":
    main()