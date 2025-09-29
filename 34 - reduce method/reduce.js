// .reduce() = reduce the elements of an array to a single value

//------------------------------------------------------------------------------------------------------------------------------------------------

//an array of prices and return total price.

// let prices = [5, 15, 30, 25, 10];   // price of grocery

// function sum(accumulator, element){     // accumulator -> previous, element -> next
//     return accumulator + element;
// }

// // previous = 5, next = 15, 5 + 15= 20.
// // previous = 20, next = 30, 20 + 30= 50.
// // previous = 50, next = 25, 50 + 25= 75.
// // previous = 75, next = 10, 75 + 10= 85.   Therefore, total price = 85.

// let total = prices.reduce(sum);
// console.log(`Total price: $${total.toFixed(2)}`);

//-------------------------------------------------------------------------------------------------------------------------------------------
// an array of score and return highest score.

// let scores = [30, 14, 94, 21, 54];

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// let maxScore = scores.reduce(getMax);
// console.log(maxScore);

