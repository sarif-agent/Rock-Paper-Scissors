console.log("Hello World!");

// Sparkle Effect Code (Taken from https://codepen.io/kucsatax/pen/vyWevX)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#FF0000", "#FF8C00", "#FFD700", "#ADFF2F", "#00FF00", "#00FA9A", "#00FFFF", "#1E90FF", "#0000FF", "#8A2BE2", "#FF00FF", "#FF1493"];

class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 5;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.2;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

let sparkles = [];

function initSparkles() {
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width; // Rastgele x koordinatı
    const y = Math.random() * canvas.height; // Rastgele y koordinatı
    sparkles.push(new Sparkle(x, y));
  }
}

function handleSparkles() {
  for (let i = 0; i < sparkles.length; i++) {
    sparkles[i].update();
    sparkles[i].draw();
    if (sparkles[i].size <= 0.2) {
      sparkles.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleSparkles();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


// Sparkle Effect End
console.log("Sparkle Effect Ready");


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
    initSparkles(); // Sparkle effect
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



