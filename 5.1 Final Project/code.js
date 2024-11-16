// Function to simulate rolling a dice when the button is clicked
function rollDice() {
    // Generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Output message variable
    let message;

    // Conditional statements to determine the outcome based on the dice roll
    if (diceRoll === 1) {
        message = "Oh no! You rolled a 1. Better luck next time!";
    } else if (diceRoll <= 3) {
        message = "You rolled a " + diceRoll + ". Not bad!";
    } else if (diceRoll <= 5) {
        message = "Great! You rolled a " + diceRoll + ". Keep it up!";
    } else {
        message = "Jackpot! You rolled a 6! You win!";
    }

    // Output the result to the webpage using innerHTML
    document.getElementById('gameOutput').innerHTML = message;
}

// Function to set up the event listener for the button

