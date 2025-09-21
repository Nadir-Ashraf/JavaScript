// Guess a number between (1 - 100)

const minNum = 1;
const maxNum = 100;
const result = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

let numOfGuess = 0;
let running = true;

while(running){
    let guess = window.prompt("Guess value between (1 - 100)");
    guess = Number(guess);

    if(isNaN(guess)){       // if user types a invalid number ("pizza")
        window.prompt("Invalid number!");
    }
    else if(guess < minNum || guess > maxNum){      // if user tries to input a number other than between (1 - 100) like "250"
        window.prompt("Enter number between (1 - 100)");
    }
    else{
        numOfGuess++;
        if(guess < result){
        window.prompt("Guess is TOO LOW");
        }
        else if(guess > result){
            window.prompt("Guess is TOO HIGH");
        }
        else{
            window.prompt(`Congratulations! ${guess} is the correct number, You took ${numOfGuess} attempts`);
            running = false;
        }
    }
}
