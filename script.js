console.log("Hello World!");

let userPoint = 0;
let computerPoint = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);


  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}



function getPlayerChoice(a) {
  let playerchoice = prompt("Rock, Paper Scissors?");
  let casePlayerChoice = playerchoice.toLowerCase();

  return casePlayerChoice;
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Ties";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userPoint++
    return "You Win! Rock beats the Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userPoint++
    return "You Win! Paper beats the Rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userPoint++
    return "You Win! Scissors beats the Papper!";
  } else {
    computerPoint++
    return `You Lose! ${computerSelection} beats the ${playerSelection}`;
  }
}

function game() {
  computerPoint = 0;
  userPoint = 0;
  for (let game = 0; game < 5; game++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult)
  }
  if (userPoint > computerPoint) {
    console.log(`You Win! Congratulations`)
  } else if (computerPoint > userPoint) {
    console.log("You Lose.")
  } else {
    console.log("Ties.")
  }
}

game();


