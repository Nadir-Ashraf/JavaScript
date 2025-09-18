//variable = A container that holds a value
//           Behaves as if it were the value it contains   

//1. Declaration    let x;
//2. Assignment     x = 10;

//number datatype
let age = 20;
let gpa = 2.2;
console.log(typeof age);

//string datatype
//Note: String can contain letters, numbers, symbols, etc...
let name = "Nadir";
let email = "nadirashraf123@gmail.com";
console.log(typeof name);
console.log(typeof email);

//Boolean datatype
let isStudent = true;
console.log(typeof isStudent);
console.log(`Student: ${isStudent}`);

let fullName = "Nadir Ashraf";
let year = 3;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `Year: ${year}`;