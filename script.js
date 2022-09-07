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

function game() {
    let score = 0
    for  (let i = 1; i <= 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        let outcome = playRound(computerChoice, playerChoice)
        console.log(outcome)
        if (outcome === `You Win! ${computerChoice} is beaten by ${playerChoice}.`) {
            score++;
        }
        
        console.log(`Your score is ${score} out of ${i}.`)

    }
    if (score > 2) {
        console.log("You Won The Game!")
    }
    else {
        console.log("You Lost The Game!")
    }

}


game()