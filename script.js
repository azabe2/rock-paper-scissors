function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
  }

function playRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  let playerSelection = prompt("Can you beat the machine!? Make a choice of either Rock, Paper, or Scissors").toLowerCase();
  console.log(playerSelection);
    if (playerSelection === computerSelection) {
    return draw;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return win1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
    return win2;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return win3;
    } else {
    return lose;
    }
  }

const draw = "It's a tie! You both chose";
const win1 = "You win! Rock beats Scissors.";
const win2 = "You win! Paper beats Rock.";
const win3 = "You win! Scissors beats Paper.";
const lose = "You lose!";

function game() {
  for (let i = 0; i < 5; i++) {
    const result = playRound();
    switch (result) {
      case win1:
        playerScore++;
        console.log(win1);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
        break;
      case win2:
        playerScore++;
        console.log(win2);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
        break;
      case win3:
        playerScore++;
        console.log(win3);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
        break;
      case lose:
        computerScore++;
        console.log(lose);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
        break;
      default:
        console.log(draw);
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
        break;
      }
  }
  console.log("Final Results: Player: " + playerScore + " Computer: " + computerScore);
  if (playerScore > computerScore) {
    console.log("Congratulations! You have beaten the machine.");
  } else if (playerScore < computerScore) {
    console.log("Oh no! The machine has beaten you, you lose the game.");
  } else {
    console.log("You have found a worthy opponent. The machine lives to fight another day.");
  }
}

let playerScore = 0;
let computerScore = 0;

game();

