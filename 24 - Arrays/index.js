// Arrays = a variable like data structure that can store more than one value.

let fruits = ["Orange", "Apple", "Grapes"];

// console.log(fruits);
// console.log(fruits[0]);     // Accessing first element of array
// fruits[1] = "Coconut";      // Reassigning a value
// console.log(fruits[6]);     // output - undefined

// fruits.push("Mango");       // add element to the end of array
// fruits.pop()                // Removes last element
// fruits.shift()              // Removes first element
// fruits.unshift("Lemon");    // Add element to the beginning

// let numOfFruits = fruits.length;    // length property to find length of array
// console.log(numOfFruits);
// console.log(fruits.indexOf("Apple"));   // returns index number
// console.log(fruits.indexOf("Pineapple"));       // returns -1 since "pineapple" is not in array fruits

// iterating through an array using for loop
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// // reverse iteration
// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

// enhanced for loop
// for(let fruit of fruits){
//     console.log(fruit);
// }

//sorting in ascending and descending order
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());