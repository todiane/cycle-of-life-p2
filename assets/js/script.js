// A scissor, Rock And Paper Game
// 1 - Soil
// 2 - Human
// 3 - Plant

// 1 - Human
// 2 - Plant
// 3 - Soil

// Variables
let comChoice = 0;
let comOutput = "";
let comWin = "";
let playWin = "";
let playWinCheck = false;
let comWinCheck = false;
let playerCount = 0;
let comCount = 0;
let userInput = "";

// Variables ref to HTML
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
    //The Game Play
    let playerOut = userInput;
    let comOut = computerSelection;
    if (comOut === "soil" && playerOut === "human") {
        playWin = "You Lose! Soil Decomposses Human";
        playWinCheck = true;
        return playWin;
    } else if (comOut === "soil" && playerOut === "plant") {
        comWin = "You Win! Plant Grows In Soil";
        comWinCheck = true;
        return comWin;
    } else if (comOut === "human" && playerOut === "plant") {
        playWin = "You Lose! Human eats Plant";
        playWinCheck = true;
        return playWin;
    } else if (comOut === "human" && playerOut === "soil") {
        comWin = "You Win! Soil Decomposses Human";
        comWinCheck = true;
        return comWin;
    } else if (comOut === "plant" && playerOut === "human") {
        comWin = "You Win! Human Eats Plant";
        comWinCheck = true;
        return comWin;
    } else if (comOut === "plant" && playerOut === "soil") {
        playWin = "You Lose! Plant Beats Soil";
        playWinCheck = true;
        return playWin;
    } else if (comOut === playerOut) {
        let bothEqual = "It's a tie";
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

// Event Lisener Function
function humanChoice() {
    game("human");
}
function plantChoice() {
    game("plant");
}
function soilChoice() {
    game("soil");
}