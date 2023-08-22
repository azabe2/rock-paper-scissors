// Computer has a random choice of rock, paper, or scissors
function getComputerChoice(choice) {
  
return choice[Math.floor(Math.random()*choice.length)];

}

const choice = ["rock", "paper", "scissors"];

console.log(getComputerChoice(choice));
// User is prompted to input their choice of rock, paper, or scissors
// Test is run to find a result
// If user beats computer display win message
// If user ties computer display tie message
// If user loses to computer play losing message
// Prompt user again until there is a score of 5 wins.