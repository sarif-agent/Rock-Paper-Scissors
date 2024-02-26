console.log("Hello World!");

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const OutCome = document.querySelector('.outcome');
const versus = document.querySelector('.versus');
const p = document.createElement('p');
const result = document.createElement('h2');

//score
const score = document.querySelector('.score');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');






let playerScore = 0;
let computerScore = 0;

playerScoreSpan.textContent = `Player Score: ${playerScore}`;
computerScoreSpan.textContent = `Computer Score: ${computerScore}`;

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

function updateScores(playerScore, computerScore) {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`;
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
}


rock.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = rock.innerText.toLowerCase();
  playRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  FinalResults(playerScore, computerScore);
})

paper.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = paper.innerText.toLowerCase();
  playRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  FinalResults(playerScore, computerScore);
})

scissors.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const playerChoice = scissors.innerText.toLowerCase();
  playRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  FinalResults(playerScore, computerScore);
})

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    p.innerText = `Ties ${playerSelection} to ${computerSelection}`;
    OutCome.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    OutCome.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    OutCome.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    OutCome.appendChild(p);
  } else {
    computerScore++
    p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function FinalResults(playerScore, computerScore) {
  if (playerScore === 5) {
    result.innerText = `Awesome! You Won the Game. Your Score is ${playerScore} against ${computerScore}`;
    OutCome.append(result)
  } else if (computerScore === 5) {
    result.innerText = `Yikes! You Lose the Game. Your Score is ${playerScore} against ${computerScore}`;
    OutCome.append(result)
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



