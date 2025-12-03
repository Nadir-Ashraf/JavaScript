// forEach = A method used to iterate over the elements
//           of an array and apply a specified function (callback)
//           to each element

//           array.forEach(callback)
//           element, index, array are provided

//--------------------------------------------------------------------------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];

function display(element){
    console.log(element);
}

function doubleValue(element, index, array){
    array[index] = element * 2;
}

function tripleValues(element, index, array){
    array[index] = element * 3;
}

// numbers.forEach(doubleValue);
// numbers.forEach(tripleValues);
numbers.forEach(display);

//-------------------------------------------------------------------------------------------------------------------------------------------

// let fruits = ["apple", "orange", "grapes", "banana"];

// function display(element){
//     console.log(element);
// }

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// fruits.forEach(display);
// fruits.forEach(upperCase);
