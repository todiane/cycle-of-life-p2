// A Human, Plant and Soil Game
// 1 - Human
// 2 - Plant
// 3 - Soil

// Global Variables
let comChoice = 0;
let comOutput = "";
let comWin = "";
let playWin = "";
let playWinCheck = false;
let comWinCheck = false;
let playerCount = 0;
let comCount = 0;
let userInput = "";

// Variables 
const human = document.getElementById("human");
const plant = document.getElementById("plant");
const soil = document.getElementById("soil");
const userScore = document.getElementById("userScore");
const comScore = document.getElementById("comScore");
const gameComment = document.getElementById("commentText");
const winComment = document.getElementById("winText");

// Event Listeners
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

    //Playing The Game - choices
    let playerOut = userInput;
    let comOut = computerSelection;
    if (comOut === "soil" && playerOut === "human") {
        playWin = "You Lose! Soil Decomposses Human";
        playWinCheck = true;
        return playWin;
    } if (comOut === "soil" && playerOut === "plant") {
        comWin = "You Win! Plant Grows In Soil";
        comWinCheck = true;
        return comWin;
    } if (comOut === "human" && playerOut === "plant") {
        playWin = "You Lose! Human eats Plant";
        playWinCheck = true;
        return playWin;
    } if (comOut === "human" && playerOut === "soil") {
        comWin = "You Win! Soil Decomposses Human";
        comWinCheck = true;
        return comWin;
    } if (comOut === "plant" && playerOut === "human") {
        comWin = "You Win! Human Eats Plant";
        comWinCheck = true;
        return comWin;
    } if (comOut === "plant" && playerOut === "soil") {
        playWin = "You Lose! Plant Beats Soil";
        playWinCheck = true;
        return playWin;
    } if (comOut == playerOut) {
        let bothEqual = "It's a draw!";
        return bothEqual; //When equal
    }
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

        // Final Output
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