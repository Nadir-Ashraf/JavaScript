// Arithmetic operators = operands = (values, variables, etc..)
//                        operands = (+, -, *, /, %, **)

let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2; // ** (exponents)
// let extraStudents = students % 2;

students += 1; // (+=) Augmented assignment operators

students++; // Increment operator
students--; // Decrement operator

/* 
    operator precedence:
    1. parenthesis ()
    2. exponents **
    3. multiplication, division, modulo
    4. addition & subtraction
*/

console.log(students);
console.log(extraStudents);