// take players choice
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const displayPlayerChoice = document.getElementById("playerChoiceResult");

let playerChoice = "";
let computerChoice = "";
let buttonClicked = 5;  // Total 5 rounds

rockBtn.onclick = function(){
    buttonClicked--;

    if(buttonClicked >= 0){
        document.getElementById("numberOfRounds").innerHTML = `Rounds Left: ${buttonClicked}`;
        
        playerChoice = "Rock";
        displayPlayerChoice.innerHTML = `Player = ${playerChoice}`;

        computerChoice = computerChoosing();        
        finalWinner = scoreCalculation(playerChoice, computerChoice);
    }

    if(buttonClicked == 0){
        showResult(finalWinner);
    }
}

paperBtn.onclick = function(){
    buttonClicked--;

    if(buttonClicked >= 0){
        document.getElementById("numberOfRounds").innerHTML = `Rounds Left: ${buttonClicked}`;
        
        playerChoice = "Paper";
        displayPlayerChoice.innerHTML = `Player = ${playerChoice}`;

        computerChoice = computerChoosing();        
        finalWinner = scoreCalculation(playerChoice, computerChoice);
    }

    if(buttonClicked == 0){
        showResult(finalWinner);
    }
}

scissorsBtn.onclick = function(){
    buttonClicked--;

    if(buttonClicked >= 0){
        document.getElementById("numberOfRounds").innerHTML = `Rounds Left: ${buttonClicked}`;
        
        playerChoice = "Scissors";
        displayPlayerChoice.innerHTML = `Player = ${playerChoice}`;

        computerChoice = computerChoosing();        
        finalWinner = scoreCalculation(playerChoice, computerChoice);
    }

    if(buttonClicked == 0){
        showResult(finalWinner);
    }
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

    document.getElementById("computerChoice").innerHTML = `Computer = ${computerChoice}`;
    return computerChoice;
}

////////////////////////////////////////////////////////////////////////////////////////////////
let playerScore = 0;
let computerScore = 0;
let winner = "";
function scoreCalculation(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
    // Draw (No point)
    }
    else if(playerChoice == "Rock" && computerChoice == "Scissors"){
        playerScore++;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        playerScore++;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        playerScore++;
    }
    else{
        computerScore++;
    }
    
    document.getElementById("playerScore").innerHTML = `${playerScore}`;
    document.getElementById("computerScore").innerHTML = `${computerScore}`;

    if(playerScore > computerScore){
        winner = "Player";
    }
    else if(playerScore < computerScore){
        winner = "Computer";
    }
    else if(playerScore == computerScore){
        winner = "Draw";
    }
    return winner;
}
////////////////////////////////////////////////////////////////////////////////////////////////

// Result
let result = document.getElementById("result");
function showResult(finalWinner){

    if(finalWinner == "Player"){
        document.getElementById("result").innerHTML = "You won";
        result.style.backgroundColor = "green";
    }
    else if(finalWinner == "Computer"){
        document.getElementById("result").innerHTML = "Computer won";
        result.style.backgroundColor = "red";
    }
    else if(finalWinner == "Draw"){
        document.getElementById("result").innerHTML = "Draw";
        result.style.backgroundColor = "rgb(143, 143, 143)";
    }
}
