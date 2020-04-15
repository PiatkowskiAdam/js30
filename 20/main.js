let text = document.querySelector(".content");
let SpeechRecognition = new window.webkitSpeechRecognition();
let paperSheet = document.querySelector(".sheet")
let startBtn = document.querySelector(".start");
let allFlags = document.querySelectorAll(".flag");
let clearBtn = document.querySelector(".clear");

allFlags.forEach(flag => flag.addEventListener("click", selectLanguage))
clearBtn.addEventListener("click", clearPage)

startBtn.addEventListener("click", start);

SpeechRecognition.addEventListener("result", speechHandler);
SpeechRecognition.lang = "en-GB";
SpeechRecognition.interimResults = true;




function start() {
  SpeechRecognition.start()
  startBtn.textContent = "listening..."
}


function speechHandler(e) {
  let allTranscipts = document.querySelectorAll("p");
  let transcript = allTranscipts[allTranscipts.length - 1]
  transcript.textContent = e.results[0][0].transcript;
  if (e.results[0].isFinal) {
    let newLine = document.createElement("p");
    text.appendChild(newLine);
    startBtn.textContent = "Start";
  }
}


function selectLanguage() {
  console.log(this);
  allFlags.forEach(flag => flag.classList.remove("selected"));
  this.classList.add("selected");
  SpeechRecognition.lang = this.dataset.language;
  console.log(SpeechRecognition.lang);
}

function clearPage() {
  text.innerHTML = "<p></p>"
}
