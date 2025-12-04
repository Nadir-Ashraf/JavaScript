// take players choice
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const displayPlayerChoice = document.getElementById("playerChoiceResult");

let playerChoice = "";
let computerChoice = "";

rockBtn.onclick = function(){
    displayPlayerChoice.innerHTML = "Player choice = Rock";
    playerChoice = "Rock";

    computerChoice = computerChoosing();
    showResult(playerChoice, computerChoice);
}

paperBtn.onclick = function(){
    displayPlayerChoice.innerHTML = "Player choice = Paper";
    playerChoice = "Paper";
    
    computerChoice = computerChoosing();
    showResult(playerChoice, computerChoice);
}

scissorsBtn.onclick = function(){
    displayPlayerChoice.innerHTML = "Player choice = Scissors";
    playerChoice = "Scissors";

    computerChoice = computerChoosing();
    showResult(playerChoice, computerChoice);
}


// Computer choice
function computerChoosing(){
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    if(randomNum == 1){
        computerChoice = "Rock";
    }
    else if(randomNum == 2){
        computerChoice = "Paper";
    }
    else if(randomNum == 3){
        computerChoice = "Scissors";
    }

    console.log(`Computer choose ${computerChoice}`);

    document.getElementById("computerChoice").innerHTML = `Computer choice = ${computerChoice}`;
    return computerChoice;
}

// Result
let result = ""; 
let resultEl = document.getElementById("result");
function showResult(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        document.getElementById("result").innerHTML = "Draw"
        result = "Draw";
    }
    else if(playerChoice == "Rock" && computerChoice == "Scissors"){
        document.getElementById("result").innerHTML = "You won";
        result = "You won";        
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        document.getElementById("result").innerHTML = "You won";
        result = "You won";
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        document.getElementById("result").innerHTML = "You won";
        result = "You won";
    }
    else{
        document.getElementById("result").innerHTML = "Computer won";
        result = "Computer won";
    }

    if(result == "You won"){
        resultEl.style.backgroundColor = "green";
    }
    else if(result == "Computer won"){
        resultEl.style.backgroundColor = "red";
    }
    else {
        resultEl.style.backgroundColor = "rgb(143, 143, 143)"
    }
}


