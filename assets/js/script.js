//Script.js File

const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
}));

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




// Global variables 
// const game = () => {
//     let playerScore = 0;
//     let computerScore =  0;
//     let movesleft = 0;
//     let start = 0;

 // Function to
    // const playGame = () => {
    //     const humanButton = document.getElementsByClassName(".human");
    //     const plantButton = document.getElementsByClassName(".plant");
    //     const soilButton = document.getElementsByClassName(".soil");
    //     const playerOptions = [humanButton, plantButton, soilButton];
    //     const computerOptions = ["human", "plant", "soil"];
    // };

// Hides reload the game button until play begins

/* Event listeners for the three player choice options
* Detail of functions to run when clicked
*/


// Main game function loop 

// Function for start of game



// Main game function loop to decide winner




// Function to run when game is over


// Calling playGame function inside game


// Calling the game function
