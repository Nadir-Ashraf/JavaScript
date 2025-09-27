// Random password generator

function passwordGeneration(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    // defining what is lowercase, uppercase, numbers, symbols.
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";
    let allowedChars = "";
    let password = "";

    // creating a single string that contains permissible characters
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if(length <= 0){
        return `(Password length must be at least 1)`;
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

let randomPassword = passwordGeneration(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Random password: ${randomPassword}`);