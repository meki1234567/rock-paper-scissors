const choices = ["rock", "paper", "scissors"]
let computerSelection;

function computerPlay () {   
  const pickOne = choices[Math.floor(Math.random() * choices.length)]; 
  computerSelection = pickOne;
  return computerSelection;
}
console.log(computerPlay())

console.log(computerSelection)

function playRound ()  {
  

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie!";
  }

  if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    return "You win! Rock beats Scissors";
  }

  if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
    return "You win! Scissors beats Paper";
  }

  if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
    return "You win! Paper beats Rock";
  }

  if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    return "You lose! Rock beats Scissors";
  }

  if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
    return "You lose! Scissors beats Paper";
  }

  if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
    return "You lose! Paper beats Rock";
  }
};
const playerSelection = "rOcK"
console.log (playerSelection)
console.log(playRound(playerSelection, computerSelection));

