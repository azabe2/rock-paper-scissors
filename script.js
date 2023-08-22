// Computer has a random choice of rock, paper, or scissors
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
    }

console.log(getComputerChoice());
// Test is run to find a result
function playRound(playerSelection, computerSelection) {
// If user ties computer display tie message
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
// If user beats computer display win message
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
// If user loses to computer play losing message
    } else {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
  }

// User is prompted to input their choice of rock, paper, or scissors
const playerSelection = prompt("Can you beat the machine!? Make a choice of either Rock, Paper, or Scissors").toLowerCase();
console.log(playerSelection)
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Prompt user again until there is a score of 5 wins.