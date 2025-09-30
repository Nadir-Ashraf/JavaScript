//  function declaration = define a reusable block of code
//                         that performs a specific task.

// function hello(){
//     console.log("Hello");
// }

// hello();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  function expression = a way to define function as 
//                        values or variables.

// const hi = function(){
//     console.log("Hi");
// }

// hi();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// passing function as an argument or treating it as a value.

// setTimeout(hello, 3000);    // Normal way 

// setTimeout(function(){  // here a function is passed as an argument.
//     console.log("Hello world");
// }, 3000);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

// benefits of using function expression instead of using function declaration is that we are not polluting global declaration space.
// meaning less global variables needs to declared.