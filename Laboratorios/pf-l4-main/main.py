print("Hola")
numero_1 = float(input("Ingrese el primer número: "))
numero_2 = float(input("Ingrese el segundo número: "))

print("==============================================================")
print(f"La suma de: {numero_1} + {numero_2} es: {numero_1 + numero_2}")
print(f"La resta de: {numero_1} - {numero_2} es: {numero_1 - numero_2}")
print(f"La multiplicación de: {numero_1} * {numero_2} es: {numero_1 * numero_2}")
print(f"La division de: {numero_1} / {numero_2} es: {numero_1 / numero_2}")
print(f"El modulo de: {numero_1} % {numero_2} es: {numero_1 % numero_2}")
print("==============================================================")

numero_1 = float(input("Ingrese el primer número: "))
numero_2 = float(input("Ingrese el segundo número: "))

opcion = input("""
==============================================================
¿Qué desea realizar con los valores ingresados?

1.- Sumar
2.- Restar
3.- Multiplicar
4.- Dividir
5.- Módulo
==============================================================
Elija una opción: """)

match opcion:
    case "1":
        print(f"La suma de: {numero_1} + {numero_2} es: {numero_1 + numero_2}")
    case "2":
        print(f"La resta de: {numero_1} - {numero_2} es: {numero_1 - numero_2}")
    case "3":
        print(f"La multiplicación de: {numero_1} * {numero_2} es: {numero_1 * numero_2}")
    case "4":
        print(f"La division de: {numero_1} / {numero_2} es: {numero_1 / numero_2}")
    case "5":
        print(f"El modulo de: {numero_1} % {numero_2} es: {numero_1 % numero_2}")

print("\n==============================================================")
print("SUMAR 3 NUMEROS: ")
numero_1 = float(input("Ingrese el primer número: "))
numero_2 = float(input("Ingrese el segundo número: "))
numero_3 = float(input("Ingrese el tercer número: "))

print(f"La suma de: {numero_1} + {numero_2} + {numero_3} es: {numero_1 + numero_2 + numero_3}")

operacion = input("Ingrese su expersion a evaluar: ")
resultado = eval(operacion)
print(f"El resultado de '{operacion}' es: {resultado}")