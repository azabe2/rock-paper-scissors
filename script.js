// Computer has a random choice of rock, paper, or scissors
function getComputerChoice(choice) {
  
return choice[Math.floor(Math.random()*choice.length)];

}

const choice = ["rock", "paper", "scissors"];

console.log(getComputerChoice(choice));
// User is prompted to input their choice of rock, paper, or scissors
const getPlayerSelection = prompt("Choose rock, paper, or scissors");

console.log(getPlayerSelection)
// Test is run to find a result
function playRound(playerSelection, computerSelection) {
    // If user ties computer display tie message
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie! You both chose Rock";
    } 
    // If user loses to computer play losing message
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    }
    // If user beats computer display win message 
    else {
        return "You win! Rock beats Scissors";
    }
    // If user ties computer display tie message
  }
   
  const playerSelection = getPlayerSelection.toLowerCase;
  const computerSelection = getComputerChoice(choice);

  console.log(playRound(playerSelection, computerSelection));

// Prompt user again until there is a score of 5 wins.