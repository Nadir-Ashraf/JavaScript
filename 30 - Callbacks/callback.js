// callback = a function that is passed as an argument 
//            to another function.

//            used to handle asynchronous operations:
//            1. Reading a file.
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when you're done, call this next".
//            Normally, JavaScript doesn’t wait for async tasks; it moves to the next line.

//--------------------------------------------------------------------------------------------------------------------------------------------
// without callback

// hello();    // This will be executed second, (after 4s)
// goodBye();  // This will be executed first.

// function hello(){
//     setTimeout( function () {
//         console.log("Hello!");
//     }, 4000);
// }

// function goodBye(){
//     console.log("Goodbye");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------
// with callback

// hello(goodBye);    // callback ensures that the goodBye() is only executed after hello().

// function hello(callback){
//     setTimeout( function () {
//         console.log("Hello!");
//         callback();
//     }, 4000);
// }

// function goodBye(){
//     console.log("Goodbye");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayResult(result){
    console.log(result);
}

sum(displayResult, 10, 20);