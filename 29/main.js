let audio = document.querySelector("audio");
let counter = document.querySelector(".counter");
let endTime = document.querySelector(".end-time");

let allButtons = document.querySelectorAll("span");
allButtons.forEach(button => button.addEventListener("click", timeHandler));
let customTime = document.querySelector("input");
customTime.addEventListener("change", customTimer);

window.addEventListener("click", stopAlarm);
window.addEventListener("keydown", stopAlarm);

let interval = '';

function customTimer() {
  if (this.value > 0) {
    customTime.setAttribute("data-seconds", Math.floor(this.value*60));
    timeHandler.call(customTime)
  } else {
    alert("Time must be greater than 0!")
  }
}

function timeHandler() {
  if (interval) {
    clearInterval(interval)
  };

  let remainingMinutes = display(Math.floor(this.dataset.seconds/60));
  let remainingSeconds = display(this.dataset.seconds % 60);

  counter.textContent = `${remainingMinutes}:${remainingSeconds}`
  endTime.textContent = `Please be back at: ${calculateTime(this.dataset.seconds)}`
  let timeSplit = counter.textContent.split(":");

  interval = setInterval(function() {
      if (timeSplit[1] === "00") {
      timeSplit[0] = display(timeSplit[0]-1);
      timeSplit[1] = display(59);
    } else {
      timeSplit[1] = display(timeSplit[1]-1);
    }
    counter.textContent = `${timeSplit[0]}:${timeSplit[1]}`
    if (timeSplit[0] === "00" && timeSplit[1] === "00") {
      clearInterval(interval);
      audio.play();
    }
  }, 1000);
}


function display(number) {
  if (number < 10) {
    return `0${String(number)}`
  } else {
    return String(number)
  }
}


function calculateTime(seconds) {
  let currentDate = new Date();

  let dateHours = currentDate.getHours();
  let dateMinutes = currentDate.getMinutes();
  let dateSeconds = currentDate.getSeconds();

  let secondsToAdd = seconds % 60;
  let minutesToAdd = Math.floor(seconds / 60);
  let hoursToAdd = 0;
  if (minutesToAdd >= 60) {
    hoursToAdd = Math.floor(minutesToAdd/60);
    minutesToAdd = minutesToAdd % 60;
  }

  let finalSeconds = dateSeconds + secondsToAdd;
  let finalMinutes = dateMinutes + minutesToAdd;
  let finalHours = dateHours + hoursToAdd;

  if (finalSeconds >= 60) {
    finalMinutes += Math.floor(finalSeconds / 60);
    finalSeconds = finalSeconds % 60;
  }
  if (finalMinutes >= 60) {
    finalHours += Math.floor(finalMinutes / 60);
    finalMinutes = finalMinutes % 60;
  }

  if (finalHours >= 24) {
    let days = Math.floor(finalHours / 24);
    finalHours = finalHours % 24;
    currentDate.setDate(currentDate.getDate() + days);
    console.log(currentDate);
    return `${display(finalHours)}:${display(finalMinutes)} (${String(currentDate).slice(0, 3)}, ${String(currentDate).slice(4, 7)} ${currentDate.getDate()})`
  }


  return `${display(finalHours)}:${display(finalMinutes)}`
}

function stopAlarm() {
  if (!audio.paused) {
    audio.load();111
  }
}
