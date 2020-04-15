let allMoles = document.querySelectorAll(".mole");
allMoles.forEach(mole => mole.addEventListener("click", whack));
let latestMole = '';
let moleCount = 0;
let interval = '';
let currentScore = 0;
let score = document.querySelector(".score");
let countdown = document.querySelector(".countdown");
let timerDiv = document.querySelector(".timer-div");
let finalScoreDiv = document.querySelector(".final-score");
let mainGameDiv = document.querySelector(".main-game");
let finalScoreText = document.querySelector(".final-score-text")

gameFlow()

function whack() {
  currentScore++;
  score.textContent = currentScore;

}

function moleMovementUp(mole) {
  mole.style.transform = 'translate(-50%, 0)';
}

function moleMovementDown(mole) {
  mole.style.transform = 'translate(-50%, 80%)';
}


function movementControl() {
  let randomMole = allMoles[Math.floor(Math.random()*allMoles.length)];

  while (latestMole.id === randomMole.id) {
    randomMole = allMoles[Math.floor(Math.random()*allMoles.length)]
  }

  moleMovementUp(randomMole);
  setTimeout(() => {
    moleMovementDown(randomMole);
  }, 600)

  latestMole = randomMole;
  moleCount++;
  console.log(moleCount);
  if (moleCount >= 20) {
    clearInterval(interval);
    finalScoreDiv.style.opacity = 1;
    mainGameDiv.style.opacity = 0;
    finalScoreText.textContent = currentScore;
    window.addEventListener("keydown", playAgain);
  }
}


function gameFlow() {

  let count = 5;
  let timer = setInterval(() => {
    count--
    countdown.textContent = count
    if (count === 0) {
      clearInterval(timer);
      timerDiv.style.opacity = 0;
    }
  }, 800);


  setTimeout(() => interval = setInterval(movementControl, 550), 6000)

}


function playAgain(e) {
 if (e.code === "Space") {
   location.reload();
 };
}
