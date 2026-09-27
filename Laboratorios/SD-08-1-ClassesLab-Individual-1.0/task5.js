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

const player = new Player('Eduardo', 5);

//Imprimimos la info base del jugador:
console.log(player.info());

//el jugador va ganando puntos de experiencia conforme juega:
console.log("Experiencia actual: ", player.experiencia, "  xp");

player.gainExperience(20);
console.log("Experiencia actual: ", player.experiencia, " xp");

player.gainExperience(20);
console.log("Experiencia actual: ",player.experiencia, " xp");

player.gainExperience(30);
console.log("Experiencia actual: ",player.experiencia, " xp");

player.gainExperience(50);

console.log("Experiencia actual: ",player.experiencia, " xp");