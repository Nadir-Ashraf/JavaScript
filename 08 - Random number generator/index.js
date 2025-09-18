// Random number generator

// let randomNum = Math.random();  // Number between 0 - 0.9
// console.log(randomNum);

// let randomNum = Math.floor(Math.random() * 6);  // Number between 0 - 6 (excluding 6)
// console.log(randomNum);

// let randomNum = Math.floor(Math.random() * 6) + 1;  // Number between 1 - 6 (including 6)
// console.log(randomNum);

// generate number between range (example 50 - 100)
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min; 
// console.log(randomNum);

//------------------------------------------------------------------------------------------------------------------------------
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}