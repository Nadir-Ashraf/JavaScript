// this keyword = reference to the object where THIS is used
//                (the object depends on the immediate context)
//                person.name = this.name

const person1 = {
    name: "Nadir",
    favFood: "Pizza",
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();

const person2 = {
    name: "Harshil",
    favFood: "Burger",
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.eat();

// Note: 'this' won't work with arrow function.