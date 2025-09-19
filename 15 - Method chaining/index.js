// Method chaining = A programming technique, calling one method after another
//                   in one continuous line of code

// In this program take input from user and convert first letter to uppercase and rest to lowercase, remove whitespaces.

let userName = window.prompt("Enter your name: ");

//--------No method chaining----------------------
// userName = userName.trim();
// let firstLetter = userName.charAt(0);
// firstLetter = firstLetter.toUpperCase(); 

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase()

// userName = firstLetter + extraChars;

// console.log(userName);

//--------- using method chaining-----------------

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);