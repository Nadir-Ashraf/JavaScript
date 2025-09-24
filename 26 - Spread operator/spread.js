// Spread operator = ... allows an iterable such as arrays,
//                   or strings to be expanded into separate 
//                   elements
//                   (unpack the elements)

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(max);

// let username = "Nadir Ashraf";
// let letters = [...username];
// console.log(letters);

//----------------------------------------------------------------------------------------------------------------------------------------
// combining two arrays using ...

// let fruits = ["Oranges", "Grapes", "Mangoes"];
// let vegetables = ["Carrots", "Beetroots", "Tomatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];     // appending two more elements
// console.log(foods);

//-----------------------------------------------------------------------------------------------------------------------------------------

// let fruits = ["grapes", "mangoes", "peaches"];
// let newFruits = [...fruits];       // newFruits is a new data structure, it is shallow copy(identical copy) of fruits[]
