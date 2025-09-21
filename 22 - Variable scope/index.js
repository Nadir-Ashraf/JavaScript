// Variable scope = where a variable is recognized and accessible
//                  (local vs global)

// x is a local variable, it's scope is inside the function.
// function function1(){
//     let x = 10;     
//     console.log(y);     //index.js:7 Uncaught ReferenceError: y is not defined at function1 because function1 does not know what is y
// }

// function function2(){
//     let y = 20;     
//     console.log(y);
// }

// function1();

//----------------------------------------------------------------------------------------------------------------------------------------

let x = 3;

function function3(){
    console.log(x);     // here x is global variable, it has global scope.
}