// Type conversion = change datatype of a value to another
//                   (Strings, booleans, numbers)

//-----------------------------------------------------------------------------------------------------------------------------

// Why type conversion example:
// let age = window.prompt("Enter your age");
// age += 1;   //When incremented age by 1 output: 201 instead of 21. Because user input is string not number.
// console.log(age);

// Above example with type conversion:
// let age = window.prompt("Enter age");
// age = Number(age);  // convert string datatype to number
// age+=1;
// console.log(age);   //output: 21

//----------------------------------------------------------------------------------------------------------------------------

// Converting string to other datatypes
// let x = "pizza";    //string
// let y = "pizza";    //string
// let z = "pizza";    //string

// x = Number(x);      //string to number
// y = String(y);      //string to string
// z = Boolean(z);     //string to boolean

// console.log(x, typeof x);   //output: value-NaN datatype-'number'
// console.log(y, typeof y);   //output: value-pizza datatype-'string'
// console.log(z, typeof z);   //output: value-true datatype-'boolean'

//----------------------------------------------------------------------------------------------------------------------------

// converting number to other datatypes
// let x = 10;     //number
// let y = 10;     //number
// let z = 10;     //number

// x = Number(x);      //number to number
// y = String(y);      //number to string
// z = Boolean(z);     //number to boolean

// console.log(x, typeof x);   //output: value-10 datatype-'number'
// console.log(y, typeof y);   //output: value-'10' datatype-'string'
// console.log(z, typeof z);   //output: value-true datatype-'boolean'

//-----------------------------------------------------------------------------------------------------------------------------

// converting empty string to boolean
// let x = "";
// x = Boolean(x);
// console.log(x, typeof x);   //output: value-'false'

//-----------------------------------------------------------------------------------------------------------------------------

// converting undefined variable to other datatypes
// let x;     //undefined variable
// let y;     //undefined variable
// let z;     //undefined variable

// x = Number(x);      //undefined variable to number
// y = String(y);      //undefined variable to string
// z = Boolean(z);     //undefined variable to boolean

// console.log(x, typeof x);   //output: value-NaN datatype-'number'
// console.log(y, typeof y);   //output: value-undefined datatype-'string'
// console.log(z, typeof z);   //output: value-false datatype-'boolean'

//------------------------------------------------------------------------------------------------------------------------------

// converting boolean to number
// let isBoolean = true;
// let isBoolean2 = false;

// isBoolean = Number(isBoolean);
// isBoolean2 = Number(isBoolean2);

// console.log(isBoolean, typeof isBoolean);   //output: 1
// console.log(isBoolean2, typeof isBoolean2); //output: 0

//------------------------------------------------------------------------------------------------------------------------------