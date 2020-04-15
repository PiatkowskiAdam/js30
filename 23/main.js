let allVoices = [];
let synthesis = window.speechSynthesis;
let selectList = document.querySelector(".voice-select");
let spokenText = document.querySelector("textarea");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let pitch = document.querySelector("#pitch");
let rate = document.querySelector("#rate");

startBtn.addEventListener("click", handleSpeech)
stopBtn.addEventListener("click", stopSpeech)

grabVoices()
if (synthesis.onvoiceschanged !== undefined) {
  synthesis.onvoiceschanged = grabVoices;
}

function grabVoices() {
  allVoices = synthesis.getVoices();
  allVoices.forEach(voice => {
    let newOption = document.createElement('option');
    newOption.textContent = `${voice.name} (${voice.lang})`;
    newOption.setAttribute("data-language", voice.lang);
    newOption.setAttribute("data-name", voice.name);
    selectList.appendChild(newOption);
  });
}

function handleSpeech() {
  if (synthesis.speaking) {
    console.log("speaking in progress");
    return;
  }

  let utterance = new SpeechSynthesisUtterance(spokenText.value);
  let selectedOption = selectList.selectedOptions[0];

  allVoices.forEach(voice => {
    if (voice.name == selectedOption.dataset.name) {
      utterance.voice = voice
    }

  });
  utterance.rate = rate.value;
  utterance.pitch = pitch.value;

  synthesis.speak(utterance)
}

function stopSpeech() {
  synthesis.cancel();
}
