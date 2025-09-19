// = assignment operator
// == comparison operator (compare if two values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){   // only check if both values are equal (Which is true, even though one is number datatype and another is a string).
    console.log("This is pi");
}
else{
    console.log("This is NOT pi");
}

if(PI === "3.14"){  // Check if value and datatype are equal.
    console.log("Both value and datatype are equal");
}
else{
    console.log("Value and datatype are different");
}

