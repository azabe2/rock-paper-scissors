function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
    } else {
    return `You lose ${computerSelection} beats ${playerSelection}`;
    }
  }

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = prompt("Can you beat the machine!? Make a choice of either Rock, Paper, or Scissors").toLowerCase();
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));