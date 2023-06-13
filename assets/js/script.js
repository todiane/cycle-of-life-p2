//Script.js File

//Global variables
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;

/* Event listeners for the three player choice options
* Detail of functions to run when clicked
*/
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
    movesleft();
}));

// Function for start of game
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if (randomNumber === 1) {
        computerChoice = 'human';
    }
    if (randomNumber === 2) {
        computerChoice = 'soil';
    }
    if (randomNumber === 3) {
        computerChoice = 'plant';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

// Main game function loop to decide winner

function getResult() {
    if (computerChoice === playerChoice) {
        result = 'Its a draw!';
    }
    if (computerChoice === 'human' && playerChoice === "plant") {
        result = 'You lose!';
    }
    if (computerChoice === 'human' && playerChoice === "soil") {
        result = 'You win!';
    }

    if (computerChoice === 'plant' && playerChoice === "human") {
        result = 'You win!';
    }
    if (computerChoice === 'plant' && playerChoice === "soil") {
        result = 'You lose!';
    }
    if (computerChoice === 'soil' && playerChoice === "plant") {
        result = 'You win!';
    }
    if (computerChoice === 'soil' && playerChoice === "human") {
        result = 'You lose!';
    }
    resultDisplay.innerHTML = result;
}

// Moves Countdown function loop 
playerOptions.forEach(option => {
    option.addEventListener('click', function () {

        const movesLeft = document.querySelector('.movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;


        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);

        // Calling gameOver function after 10 moves
        if (moves == 10) {
            gameOver(playerOptions, movesLeft);
        }
    });
});



// Hides reload the game button until play begins