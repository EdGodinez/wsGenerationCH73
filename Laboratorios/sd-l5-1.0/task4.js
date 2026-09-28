export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const fechaActual = new Date();

        const anioActual = fechaActual.getFullYear();
        const mesActual = fechaActual.getMonth() + 1;
        const diaActual = fechaActual.getDate();

        let edad = anioActual - this.year - 1;

        if (this.month < mesActual) {
            edad++;
        } else if (this.month === mesActual && this.day <= diaActual) {
            edad++;
        }

        return (this.name + " is " + edad + " today!");
    }
}