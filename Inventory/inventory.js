/* Product Inventory Project - Create an application which manages an 
inventory of products. Create a product class which has a price, id, 
and quantity on hand. Then create an inventory class which keeps track
of various products and can sum up the inventory value. */


function Product(name, id, price, units) {
    this.name = name,
    this.id = id,
    this.price = price,
    this.units = units
    // this.removeUnits = function(val) {
    //     this.units = this.units - val;
    // },
    // this.dropPriceByPercentage = function(val) {
    //     this.price = this.price - (this.price * val);
    // }
}

Product.prototype.removeUnits = function(val) {
    this.units = this.units - val;
}

Product.prototype.dropPriceByPercentage = function(val) {
    this.price = this.price - (this.price * val);
}

let chlebRycerski = new Product("Chleb Rycerski", "Chleb", 3.99, 20);
let chlebZytni = new Product("Chleb Zytni", "Chleb", 4.99, 7);
let chlebOrkiszowy = new Product("Chleb Orkiszowy", "Chleb", 3.49, 10);
let signal = new Product("Signal", "Pasta do zebow", 3.99, 30);
let colgate = new Product("Colgate", "Pasta do zebow", 4.99, 20);
let butyVans = new Product("Nowiutkie Vansy", "Buty", 199.99, 10);
let butyAdidas = new Product("Nowiutkie Adidasy", "Buty", 299.99, 15);

let inventory = [chlebRycerski,
     chlebZytni,
     chlebOrkiszowy,
     signal,
     colgate,
     butyVans,
     butyAdidas
];

function countInventoryValue() {
    var totalValue = 0;
    for (let n = 0; n < inventory.length; n++) {
       totalValue = totalValue + (inventory[n].price * inventory[n].units);
    }
    return "$" + totalValue.toFixed(2);
}

console.log(chlebRycerski);
console.log(countInventoryValue());