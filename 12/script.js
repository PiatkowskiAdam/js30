window.addEventListener('keyup', keyStroke);

let body = document.querySelector("body")
let typedCode = [];
const secretWord = "badumtss"


function keyStroke(e) {
  typedCode.push(e.key);
  checkCode(typedCode)
}

function checkCode(code) {
  typedCode.forEach((letter, i) => {
      if (typedCode[i] !== secretWord[i]) {
      typedCode = [];
    }
  });
  if (typedCode.length === secretWord.length) {
    let congrats = document.createElement("h1");
    congrats.textContent = "You guessed the secret word!"
    body.appendChild(congrats)
  }
}
