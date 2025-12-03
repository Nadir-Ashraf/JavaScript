// Goal: Count vowels in a given sentence.

let sentence = "This is a string";
sentence = sentence.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let i = 0; i < sentence.length; i++){
    if (vowels.includes(sentence[i])){
        count++;
    }
}

console.log(count);