// Goal: Reverse a given string

// let sentence = "JavaScript is a programming language";
// let reverseString = "";

// for (let i = sentence.length - 1; i >= 0; i--){
//     reverseString += sentence[i];    
// }

// console.log(reverseString);

//-------------------------------------------------------------------------------------------------------------------------------

// build-in method

// let sentence = "Hello world";
// let arr = [];

// for (let i = 0; i <= sentence.length - 1; i++){
//     arr.push(sentence[i]);
// }

// console.log(arr.reverse().join(""));

//------------------------------------------------------------------------------------------------------------------------------

let sentence = "Hello world";
let reverseString = sentence.split("").reverse().join("");
console.log(reverseString);