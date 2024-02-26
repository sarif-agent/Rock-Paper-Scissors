console.log("Hello World!");

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const OutCome = document.querySelector('.outcome');


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


rock.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = rock.innerText.toLowerCase();
  console.log(playerChoice);
  playRound(playerChoice, computerChoice);
})

paper.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = paper.innerText.toLowerCase();
  console.log(playerChoice);
  playRound(playerChoice, computerChoice);
})

scissors.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = scissors.innerText.toLowerCase();
  console.log(playerChoice);
  playRound(playerChoice, computerChoice);
})

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement('p');
    p.innerText = `Ties ${playerSelection} to ${computerSelection}`;
    OutCome.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userPoint++
    const p = document.createElement('p');
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    OutCome.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userPoint++
    const p = document.createElement('p');
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    OutCome.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userPoint++
    const p = document.createElement('p');
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    OutCome.appendChild(p);
  } else {
    computerPoint++
    const p = document.createElement('p');
    p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    OutCome.appendChild(p);
  }
}


// function game() {
//   computerPoint = 0;
//   userPoint = 0;
//   // for (let game = 0; game < 5; game++) {
//   const playerSelection = getPlayerChoice();
//   const computerSelection = getComputerChoice();
//   const roundResult = playRound(playerSelection, computerSelection);
//   console.log(roundResult)
// }
// if (userPoint > computerPoint) {
//   final.innerText = `You Win! Your score is ${userPoint} against ${computerPoint}. Congratulations.`
//   console.log(`You Win! Your score is ${userPoint} against ${computerPoint}. Congratulations.`)
// } else if (computerPoint > userPoint) {
//   final.innerText = `You Lose! Your score is ${userPoint} against ${computerPoint}. Bad Game.`
//   console.log(`You Lose! Your score is ${userPoint} against ${computerPoint}. Bad Game.`)
// } else {
//   final.innerText = `Ties. Your score is ${userPoint} against to ${computerPoint}. Equality.`
//   console.log(`Ties. Your score is ${userPoint} against to ${computerPoint}. Equality.`)
// }



