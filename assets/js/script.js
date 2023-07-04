// JS SCRIPT for Human, Plant and Soil Game

/*I made this game up and it is based on the rock, paper, scissors game - code inspired by Geeks for Geeks 
https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/ 
and https://youtu.be/RwFeg0cEZvQ */

// Global Variables
let comChoice = 0;
let comOutput = "";
let playWin = "";
let playWinCheck = false;
let comWinCheck = false;
let playerCount = 0;
let comCount = 0;

// Local Variables/functions
const human = document.getElementById("human");
const plant = document.getElementById("plant");
const soil = document.getElementById("soil");
const userScore = document.getElementById("userScore");
const comScore = document.getElementById("comScore");

// Event Handling
human.addEventListener("click", humanChoice);
plant.addEventListener("click", plantChoice);
soil.addEventListener("click", soilChoice);

// Event Listener Function
function humanChoice() {
    game("human");
}
function plantChoice() {
    game("plant");
}
function soilChoice() {
    game("soil");
}

//Computer Choice
function computerPlay() {
    for (let i = 0; i < 1; i++) {
        comChoice = Math.floor(Math.random() * 3) + 1;
        if (comChoice === 1) {
            comOutput = "human";
        } else if (comChoice === 2) {
            comOutput = "plant";
        } else comOutput = "soil";
    }
    return comOutput;
}

function playRound(userInput, computerSelection) {
    // Resetter to default False
    playWinCheck = false;
    comWinCheck = false;

    //Playing The Game - Conditionals
    let playerOut = userInput;
    let comOut = computerSelection;

    const winOrder = {
        "soil": "human",
        "human": "plant",
        "plant": "soil",
    };
    console.log();

    if (playerOut == comOut) {
        const message = "You DREW! Player played: " + playerOut + ", Computer played: " + comOut;
        return message;
    }


    if (winOrder[playerOut] == comOut) {
        playWin = "You WIN!! Player played: " + playerOut + ", Computer played: " + comOut;
        playWinCheck = true;
        return playWin;
    }

    const message = "You LOST!! Player played: " + playerOut + ", Computer played: " + comOut;
    comWinCheck = true;
    return message;
}
// Input Level
function game(userInput) {
    if (playerCount !== 7 && comCount !== 7) {
        let computerSelection = computerPlay();
        let finaleOutput = playRound(userInput, computerSelection);
        commentText.innerText = finaleOutput; // JS HINT SAYS THIS IS AN UNDEFINED VARIABLE - DO I NEED IT HERE? ASK ANDRE
        if (playWinCheck === true) playerCount++;
        else if (comWinCheck === true) comCount++;

        userScore.innerText = playerCount;
        comScore.innerText = comCount;

        // Final Output Loops
        setTimeout(() => {
            if (playerCount === 7 || comCount === 7) {
                if (playerCount > comCount) {
                    setTimeout(() => {
                        window.location.href = "winner.html";
                    }, 2000);
                } else {
                    setTimeout(() => {
                        window.location.href = "loser.html";
                    }, 2000);
                }
            }
        }, 0);
    }
}