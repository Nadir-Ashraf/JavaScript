// class = (ES6 feature) provides a more structured and cleaner way to 
//         work with objects compared to traditional constructor functions
//         ex: static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displyProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 10.99);
const product2 = new Product("Pants", 20.50);

product1.displyProduct();

const salesTax = 0.05;
const total = product1.calculateTotal(salesTax);
console.log(`Total price (including tax): $${total.toFixed(2)}`)