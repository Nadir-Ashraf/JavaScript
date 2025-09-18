// String slicing = creating a substring from a portion of another string

// let name = "Nadir Ashraf";

// let firstName = name.slice(0, 5);   // slice(start, end);
// let lastName = name.slice(6);
// let lastChar = name.slice(-1);   

// console.log(firstName);
// console.log(lastName);
// console.log(lastChar);

//----------------------------------------------------------------------------------------------------------------------------

// Making slicing more dynamic, so whatever name we give we can take first name and last name from it.
// We can give any name and it will separate first name and last name.

// let fullName = "Nadir Ashraf";   

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

//-----------------------------------------------------------------------------------------------------------------------------

// simple exercise - extract username and extension from an email id

// let email = "nadir123@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);