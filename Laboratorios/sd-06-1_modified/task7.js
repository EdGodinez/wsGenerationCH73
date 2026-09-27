

// Type your code below this line!
class Car{
    constructor(marca, modelo, anio, color, puertas, kilometraje, tipoMotor){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
        this.puertas = puertas;
        this.kilometraje = kilometraje;
        this.tipoMotor = tipoMotor;
    }

    infoCar() {
        return (
            this.marca + " " +
            this.modelo + " - " +
            this.anio + " - " +
            this.color + " - " +
            this.puertas + " puertas - " +
            this.kilometraje + " km - " +
            this.tipoMotor
        );
    }

    infoMotor() {
        if(this.tipoMotor.toLowerCase() === "electric") {
            return "Este auto es electrico";
        } 

        return "Este auto No es electrico";
    }
}

const marca = process.argv[3];
const modelo = process.argv[4];
const anio = Number(process.argv[5]);
const color = process.argv[6];
const puertas = Number(process.argv[7]);
const kilometraje = Number(process.argv[8]);
const tipoMotor = process.argv[9];

const car1 = new Car(marca, modelo, anio, color, puertas, kilometraje, tipoMotor);

console.log(car1.infoCar());
console.log(car1.infoMotor());

// Type your code above this line!

