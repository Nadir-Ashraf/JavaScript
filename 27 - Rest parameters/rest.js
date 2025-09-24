// Rest parameter = (..rest) allows a function to work with a variable 
//                  number of arguments by bundling them into an array

//                  spread = expand an array into separate elements
//                  rest = bundles separate elements into an array

// function openFridge(...foods){      //foods is the name of array created using rest parameter
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;   // return an array of foods
// }

// let food1 = "Rice";
// let food2 = "Milk";
// let food3 = "Ramen";
// let food4 = "Eggs";

// openFridge(food1, food2, food3, food4);     // (...rest) parameters takes any number of arguments

// let foods = getFood(food1, food2, food3);    
// console.log(foods);

//-------------------------------------------------------------------------------------------------------------------------------------------

// calculate sum 
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }    
    return result;
}

let total = sum(10, 13, 27);
console.log(`Your total: $${total}`);

// calculate average
function getAverage(...marks){
    let result = 0;
    for(let mark of marks){
        result += mark;
    }
    return result / marks.length;
}

const averageScore = getAverage(50, 90, 21, 35, 93);
console.log(`Average score: ${averageScore}`);

//-------------------------------------------------------------------------------------------------------------------------------------------

// combing multiple strings

function combineString(...strings){ // string = ["Mr.", "Nadir", "Ashraf"]
    return strings.join(" ");       // joins the strings in array(strings) with a space between. (Mr. Nadir Ashraf)
}

const fullName = combineString("Mr.", "Nadir", "Ashraf");
console.log(fullName);


