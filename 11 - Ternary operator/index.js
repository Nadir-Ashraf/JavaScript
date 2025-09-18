// Ternary operator = A shortcut to if{} and else{} statements 
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// let age = 16;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// let time = 12;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

let purchaseAmount = 1200;
let discount = purchaseAmount >= 1000 ? purchaseAmount * 0.1 : 0; //if amount >= 1000, 10% discount else no discount.
purchaseAmount = purchaseAmount - discount;
console.log(purchaseAmount);


