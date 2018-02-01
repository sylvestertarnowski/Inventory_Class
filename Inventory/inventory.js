/* Product Inventory Project - Create an application which manages an 
inventory of products. Create a product class which has a price, id, 
and quantity on hand. Then create an inventory class which keeps track
of various products and can sum up the inventory value. */


function Product(name, type, price, units) {
    this.name = name,
    this.type = type,
    this.price = price,
    this.units = units,
    this.removeUnits = function(val) {
        this.units = this.units - val;
    },
    this.dropPriceByPercentage = function(val) {
        this.price = this.price - (this.price * val);
    }
}

let chlebRycerski = new Product("Chleb Rycerski", "Chleb", 3.99, 20);
let chlebŻytni = new Product("Chleb Żytni", "Chleb", 4.99, 7);
let chlebOrkiszowy = new Product("Chleb Orkiszowy", "Chleb", 3.49, 10);
let signal = new Product("Signal", "Pasta do zębów", 3.99, 30);
let colgate = new Product("Colgate", "Pasta do zębów", 4.99, 20);
let butyVans = new Product("Nowiutkie Vansy", "Buty", 199.99, 10);
let butyAdidas = new Product("Nowiutkie Adidasy", "Buty", 299.99, 15);

console.log(chlebRycerski);