// Declerations
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result')
const scoreDiv = document.querySelector(".score")
const listDiv = document.querySelector("li")

// Game Code
function getPlayerChoice() {
    let playerChoice = prompt("Throw hands!", "Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(computerChoice,playerChoice) {
    if (computerChoice === playerChoice) {
        let result = `You Draw! You both picked ${playerChoice}.`;
        return result;
    }
    else if (playerChoice === "rock") {
        if (computerChoice ==="paper") {
            let result = `You Lose! ${playerChoice} is beaten by ${computerChoice}.`;
            return result;
        }
        else {
            let result = `You Win! ${computerChoice} is beaten by ${playerChoice}.`;
            return result;
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice==="scissors") {
            let result = `You Lose! ${playerChoice} is beaten by ${computerChoice}.`;
            return result;
        }
        else {
            let result = `You Win! ${computerChoice} is beaten by ${playerChoice}.`;
            return result;
        }
    }
    else if (playerChoice === "scissors"){
        if (computerChoice ==="rock") {
            let result = `You Lose! ${playerChoice} is beaten by ${computerChoice}.`;
            return result;
        }
        else {
            let result = `You Win! ${computerChoice} is beaten by ${playerChoice}.`;
            return result;
        }
    }
    else {
        let result = "Please try again and pick a valid option.";
        return result;
    }
}

function game(buttonPressed) {
    
    const computerChoice = getComputerChoice();
    const playerChoice = buttonPressed;
    let outcome = playRound(computerChoice, playerChoice);
    resultDiv.textContent = (outcome);
    if (outcome === `You Win! ${computerChoice} is beaten by ${playerChoice}.`) {
       score++;
    }
    gameCounter ++;
    scoreDiv.textContent = (`Your score is ${score} out of ${gameCounter}.`);
    
    if ((gameCounter >= 5) || (score >= 5)) {
        listDiv.removeChild(buttons[0])
        listDiv.removeChild(buttons[1])
        listDiv.removeChild(buttons[2])
        if (score >= 5) {
            listDiv.textContent = ("Game Over! You Win!")
        }
        else {
            listDiv.textContent = ("Game Over! The Computer Wins!")
        }
        
    }
}

let score = 0;
let gameCounter = 0

buttons[0].addEventListener("click", () => {game("rock")})
buttons[1].addEventListener("click", () => {game("paper")})
buttons[2].addEventListener("click", () => {game("scissors")})
