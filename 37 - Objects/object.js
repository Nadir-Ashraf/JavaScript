// object = A collection of related properties and/or methods
//          properties: what an object has
//          methods: functions an object can perform
//          can represent real world objects (people, products, places)
//          object = {key: value,
//                    function()}

const person1 = {
    firstName: "Nadir",
    lastName: "Ashraf",
    age: 20,
    isEmployed: false,
    eat: function(){console.log("I am eating food")},
    walk: function(){console.log("I am walking")},
}

console.log(person1.firstName);  // accessing the property of object
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.eat();  // accessing a method of object(person1).
person1.walk();

const person2 = {
    firstName: "Mohammad",
    lastName: "Harshil",
    age: 20,
    isEmployed: false,
    sing: () => console.log("I am singing a song"), // arrow function
    run: function(){console.log("I am running")},   // function expression
}

console.log(person2.firstName);  // accessing the property of object
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sing();
person2.run();
