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
const animal = document.getElementById("animal");
const weather = document.getElementById("weather");
const userScore = document.getElementById("userScore");
const comScore = document.getElementById("comScore");
const commentText = document.getElementById("commentText");

// Event Handling
human.addEventListener("click", humanChoice);
plant.addEventListener("click", plantChoice);
soil.addEventListener("click", soilChoice);
animal.addEventListener("click", animalChoice);
weather.addEventListener("click", weatherChoice);

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
function animalChoice() {
    game("animal");
}
function weatherChoice() {
    game("weather");
}
//Computer Choice
function computerPlay() {
    comChoice = Math.floor(Math.random() * 5) + 1;
    if (comChoice === 1) {
        comOutput = "human";
    } else if (comChoice === 2) {
        comOutput = "plant";
    } else if (comChoice === 3) {
        comOutput = "soil";
    } else if (comChoice === 4) {
        comOutput = "animal";
    } else comOutput = "weather";

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
        "soil": "weather",
        "human": "plant",
        "human": "animal",
        "plant": "soil",
        "plant": "weather",
        "weather": "animal",
        "weather": "plant",
        "animal": "human"
    };

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
        commentText.innerText = finaleOutput;
        if (playWinCheck === true) playerCount++;
        else if (comWinCheck === true) comCount++;

        userScore.innerText = playerCount;
        comScore.innerText = comCount;

        // Final Output Loops

        if (playerCount === 7 || comCount === 7) {
            if (playerCount > comCount) {
                setTimeout(() => {
                    window.location.href = "winner.html";
                }, 1000);
            } else {
                setTimeout(() => {
                    window.location.href = "loser.html";
                }, 1000);
            }
        }
    }
}