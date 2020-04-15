let wrapper = document.querySelector(".whole-thing");

let video = document.querySelector(".video");

let playButton = document.querySelector(".play-btn");
playButton.addEventListener("click", playPause);
video.addEventListener("click", playPause);

let volumeSlider = document.querySelector(".volume-slider");
volumeSlider.addEventListener("change", volumeControl);

let speedSlider = document.querySelector(".speed-slider");
speedSlider.addEventListener("change", speedControl);

let timeBackwards = document.querySelector(".time-backwards");
timeBackwards.addEventListener("click", rewind);

let timeForwards = document.querySelector(".time-forwards")
timeForwards.addEventListener("click", fastForward)

let progress = document.querySelector("progress");
video.addEventListener("timeupdate", progressTracker)
progress.addEventListener("click", progressSetter)


function playPause() {
  if (video.paused) {
    video.play()
    playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg>'
  } else {
    video.pause()
    playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>'
  }
}

function volumeControl(e) {
  video.volume = e.target.value*0.01
}

function speedControl(e) {
  video.playbackRate = e.target.value*0.1;
}

function rewind() {
  video.currentTime -= 10;
}

function fastForward() {
  video.currentTime += 25;
}

function progressTracker() {
  progress.value = video.currentTime / video.duration * 100;
}

function progressSetter(e) {
  let x = e.offsetX / progress.offsetWidth * video.duration
  video.currentTime = x;
}
