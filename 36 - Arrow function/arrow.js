// arrow function = a concise way to write function expressions
//                  good for simple functions that you use only once\
//                  (parameters) => some code

// function declaration
function hello(){
    console.log("Hello");
}

hello();

// function expression
const hi = function(){
    console.log("Hi");
}

hi();

// arrow function
const goodBye = () => console.log("Good bye");
goodBye();

// accepting arguments in arrow function
const person = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};

person("Nadir", 20);

// using arrow function as an argument
// setTimeout(callback, time); // syntax

setTimeout(() => console.log("Hello"), 2000);

// using arrow function on map(), filter(), reduce().

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(evenNums);
console.log(total);