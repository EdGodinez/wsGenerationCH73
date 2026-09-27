export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experiencia = 0;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level++;
  }

  gainExperience(experiencia) {

    console.log("+ ", experiencia)

    this.experiencia += experiencia;

    while (this.experiencia >= 100) {
      console.log("¡Felicidades! Has alcanzado 100 XP y subido de nivel.");

      this.levelUp();
      this.experiencia -= 100;
      
      console.log(this.info());

    }
  }
}

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

//Creación o instancias de jugadores
const player1 = new Player('Eduardo', 5);
const player2 = new Player('Lucia', 10);
const player3 = new Player('Rick', 1);

//Agregamos jugadores al grupo
addPlayer(player1);
addPlayer(player2);
addPlayer(player3);

//Imprimir grupo
console.log(grupo);

//Eliminar un jugador del grupo
removePlayer(player2);

//imprimir grupo
console.log(grupo);