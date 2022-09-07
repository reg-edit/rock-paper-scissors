function getPlayerChoice() {
    playerChoice = prompt("Throw hands!", "Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
    
}

console.log(getComputerChoice());
getPlayerChoice()