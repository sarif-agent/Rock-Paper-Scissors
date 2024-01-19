console.log("Hello World!");

// let rock = "Rock beats Scissors, but loses to Paper";
// let scissors = "Scissors beats Paper, but loses to Rock";
// let paper = "Paper beats Rock, but loses to Scissors";

function getComputerChoice(a, b, c) {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return a;
  } else if (randomChoice === 1) {
    return b;
  } else {
    return c;
  }
}

console.log(getComputerChoice("rock", "scissors", "paper"));