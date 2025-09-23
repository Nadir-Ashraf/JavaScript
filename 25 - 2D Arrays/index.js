// 2D Array = multidimensional array that stores a matrix 
//            of data in rows and columns
//            useful for games, spreadsheet, or representing an image.

//            [[o, x, o],
//             [x, o, x],
//             [o, x, o]]

const matrix = [[1, 2, 3],
                [4, 5, 6], 
                [7, 8, 9]]

// for(row of matrix){     // Printing each row
//     console.log(row);
// }

// Accessing each element in a 2D array
console.log(matrix[0][0]);

// 2D array does not needs to be uniformed
const telephonePad = [[1, 2, 3, 6, 8, 10],  // each row can contain different number of elements
                      [4, 5, 6]
                      [7, 8, '*', '#']];    // 2D Array can store different datatypes.

                