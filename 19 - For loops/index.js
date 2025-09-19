// for loops = repeat some code for LIMITED amount of times

// for(let i = 0; i <= 2; i++){
//     console.log("Hello");
// }

// // Another example
// for(let i = 2; i <= 10; i+=2){
//     console.log(i);
// }

// // Decrementing
// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// continue
for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue;       // Skips 13 and continue from 14
    }
    else{
        console.log(i);
    }
}

// break
for(let i = 1; i <= 20; i++){

    if(i == 13){
        break;          // break the for loop.
    }
    else{
        console.log(i);
    }
}