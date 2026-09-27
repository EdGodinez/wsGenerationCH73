

// Type your code below this line!
class ShoppingList{
    constructor(items){
        this.items = items;
    }
}

const cantidadProductos = Number(process.argv[3]);

const items = [];

for (let i = 0; i < cantidadProductos; i++) {

    const item = {
        product: process.argv[4 + (i * 2)],
        cantidad: Number(process.argv[5 + (i * 2)])
    };

    items.push(item);
}

const list = new ShoppingList(items);
console.log(list.items)


// Type your code above this line!

