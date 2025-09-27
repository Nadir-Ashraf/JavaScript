// Dice roller program

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const rollResult = document.getElementById("rollResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const diceValue = Math.floor(Math.random() * 6) + 1;    // generates an integer value btw (1-6).
        values.push(diceValue);
        images.push(`<img src="dice_images/${diceValue}.png" alt="Dice ${diceValue}">`);
    }
    rollResult.textContent = `Dice Values: ${values.join(', ')}`;
    diceImage.innerHTML = images.join('');
} 