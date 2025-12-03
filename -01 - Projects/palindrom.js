// Goal: check if a given string is palindrome or not
// palindrome means if word is reversed we get same word
// example: Malayalam - Malayalam

const word = "malayalam";
const reversedWord = word.split("").reverse().join("");

if (word == reversedWord){
    console.log("The given word is palindrome");
}
else {
    console.log("The given word is not palindrome");
}