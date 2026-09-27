export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experiencia = 0;
    this.inventory = [];
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level++;
  }

  /* ====== EXPERIENCIA ======= */
  gainExperience(experiencia) {

    console.log("+ ", experiencia);

    this.experiencia += experiencia;

    while (this.experiencia >= 100) {
      console.log("¡Felicidades! Has alcanzado 100 XP y subido de nivel.");

      this.levelUp();
      this.experiencia -= 100;

      console.log(this.info());

    }
  }
  
  /*================ INVENTARIO ===================*/
  //Metodo para buscar item
  findItem(nombre) {
    return this.inventory.find(item => item.nombre === nombre);
  }

  addItem(nombre, cantidad) {
    const item = this.findItem(nombre);

    if (item) {
      item.cantidad += cantidad;
    } else {
      this.inventory.push({
        nombre: nombre,
        cantidad: cantidad
      });
    }
  }

  removeItem(nombre, cantidad) {
    const item = this.findItem(nombre);

    if (item) {
      if (item.cantidad <= cantidad) {

        const index = this.inventory.indexOf(item);
        this.inventory.splice(index, 1);

      } else {
        item.cantidad -= cantidad;
      }
    } else {
      console.log("Item no encontrado");
    }

  }

}


/*================ GRUPO ===================*/

//Creación de grupo para jugadores
const grupo = [];

//Metodo para agregar jugadores al grupo
function addPlayer(player) {
  grupo.push(player);
}

//Metodo para eliminar jugadores del grupo:
function removePlayer(player) {
  const index = grupo.indexOf(player);

  if (index !== -1) {
    grupo.splice(index, 1);
  }
}


const player1 = new Player('Eduardo', 5);
const player2 = new Player('Lucy', 5);


//Agregar items base a Eduardo
player1.addItem("Pocion", 3);
player1.addItem("Espada", 1);
player1.addItem("Escudo", 1);
player1.addItem("Planta", 4);
player1.addItem("Monedas", 23);

//Imprimir inventario base de Eduardo
console.log("Inventario base =========================")
console.log({
  jugador: player1.name,
  inventario: player1.inventory
});

//Agregar items base a Lucy
player2.addItem("Pocion", 9);
player2.addItem("Baculo", 1);
player2.addItem("Capa", 1);
player2.addItem("Libro", 2);
player2.addItem("Monedas", 63);

//Sumar cantidad de items a Eduardo:
player1.addItem("Pocion", 2);
player1.addItem("Espada", 1);
player1.addItem("Escudo", 1);
player1.addItem("Planta", 2);
player1.addItem("Monedas", 9);

//Imprimir inventario base de Lucy
console.log("Inventario base =========================")
console.log({
  jugador: player2.name,
  inventario: player2.inventory
});

//Imprimir nuevo inventario
console.log("Inventario actualizado ==================")
console.log({
  jugador: player1.name,
  inventario: player1.inventory
});

//Eliminar objetos
player1.removeItem("Pocion", 4);
player1.removeItem("Espada", 2);
player1.removeItem("Escudo", 2);
player1.removeItem("Planta", 3);
player1.removeItem("Monedas", 16);

console.log("Eliminar items ===========================")
console.log({
  jugador: player1.name,
  inventario: player1.inventory
});