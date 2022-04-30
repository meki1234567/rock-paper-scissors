const choices = ["rock", "paper", "scissors"]

function computerPlay () {   
  const pickOne = choices[Math.floor(Math.random() * choices.length)]; 
  computerSelection = pickOne;
  return computerSelection;
}
function playRound (playerSelection, computerSelection)  {

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper"; 
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  }

  if(playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  }
};

function game() {
  let computerScore=0;
  let playerScore=0;
  let message;

  for (let i=0; i<5; i++) {
      let playerSelection = prompt ("?")
    console.log(playerSelection);
      let computerSelection = computerPlay();
    console.log(computerSelection);
      let roundResult = playRound(playerSelection,computerSelection);
console.log(playRound(playerSelection, computerSelection))
      if(roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++
      }
  }
message = (playerScore > computerScore) ? "you win!":
          (playerScore < computerScore) ? "you lose!":
          "draw!";

return `${message}`;
}

console.log(game());
