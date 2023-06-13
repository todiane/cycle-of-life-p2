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
playerChoice.forEach(option => {
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

// Function to run when game is over
const gameOver = (playerOptions, movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    });

    chooseMove.innerText = 'Game Over!!';
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game';
        result.style.color = '#308D46';
    }
    else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey';
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    });
};


// Calling playGame function inside game
playGame();


// Calling the game function
game();

