console.log("Hello World!");

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const OutCome = document.querySelector('.outcome');
const versus = document.querySelector('.versus');
const p = document.createElement('p');
const result = document.createElement('h2');

const clickSfx = new Audio('./sounds/clicksfx.wav');
const winSfx = new Audio('./sounds/winnersfx.wav');
const lostSfx = new Audio('./sounds/lostsfx.wav');


//score
const score = document.querySelector('.score');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');


// playRound p 
p.style.fontSize = "22px";
p.style.textShadow = '2px 2px 4px black';


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
  if (playerScore == 0 && computerScore == 0) {
    result.innerText = " ";
  }
  const computerChoice = getComputerChoice();
  const playerChoice = 'rock';
  clickSfx.play();
  playRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  FinalResults(playerScore, computerScore);
})

rock.addEventListener('mouseover', (event) => {
  event.target.textContent = '⛰️';
})

rock.addEventListener('mouseout', (event) => {
  event.target.textContent = 'ROCK';
})

paper.addEventListener('click', () => {
  if (playerScore == 0 && computerScore == 0) {
    result.innerText = " ";
  }
  const computerChoice = getComputerChoice();
  const playerChoice = 'paper';
  clickSfx.play();
  playRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  FinalResults(playerScore, computerScore);
})

paper.addEventListener('mouseover', (event) => {
  event.target.textContent = '📜';
})

paper.addEventListener('mouseout', (event) => {
  event.target.textContent = 'PAPER';
})

scissors.addEventListener('click', () => {
  if (playerScore == 0 && computerScore == 0) {
    result.innerText = " ";
  }
  const computerChoice = getComputerChoice();
  const playerChoice = 'scissors';
  clickSfx.play();
  playRound(playerChoice, computerChoice);
  updateScores(playerScore, computerScore);
  FinalResults(playerScore, computerScore);
})

scissors.addEventListener('mouseover', (event) => {
  event.target.textContent = '✂️';
})

scissors.addEventListener('mouseout', (event) => {
  event.target.textContent = 'SCISSORS';
})


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    p.innerText = `Ties ${playerSelection} to ${computerSelection}.`;
    p.style.color = 'white';
    OutCome.append(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`;
    p.style.color = '#00FFFF';
    OutCome.append(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`;
    p.style.color = '#00FFFF';
    OutCome.append(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`;
    p.style.color = '#00FFFF';
    OutCome.append(p);
  } else {
    computerScore++
    p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    p.style.color = '#EF0107';
    OutCome.append(p);
  }
}

function FinalResults() {
  if (playerScore === 5) {
    result.innerText = `Awesome! You Won the Game. Your Score is ${playerScore} against ${computerScore}.`;
    OutCome.append(result)
    winSfx.play();
    result.style.color = '#00FF00';
    result.style.fontWeight = '700';
    result.style.textShadow = '2px 2px 4px black';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.innerText = `Yikes! You Lose the Game. Your Score is ${playerScore} against ${computerScore}.`;
    OutCome.append(result)
    lostSfx.play();
    result.style.color = 'red';
    result.style.fontWeight = '700';
    result.style.textShadow = '2px 2px 4px black';
    playerScore = 0;
    computerScore = 0;
  }
}



