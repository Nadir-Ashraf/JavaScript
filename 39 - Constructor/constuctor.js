// constructor = special method for defining the
//               properties and methods of objects

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// without constructor

// const car1 = {
//     model: "Mustang",
//     year: 2025,
//     color: "red",
//     drive: function(){console.log(`you drive the ${this.model}`)}
// }
// const car2 = {
//     model: "Chevrolet",
//     year: 2024,
//     color: "blue",
//     drive: function(){console.log(`you drive the ${this.model}`)}
// }
// const car3 = {
//     model: "Dodge",
//     year: 2025,
//     color: "black",
//     drive: function(){console.log(`you drive the ${this.model}`)}
// }

// without constructor we have to create each objects manually

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// using constructors

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Toyota", "Innova", 2024, "Black");
const car2 = new Car("Ford", "Mustang", 2025, "Red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();