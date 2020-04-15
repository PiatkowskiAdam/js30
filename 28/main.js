const controller = document.querySelector(".rate-controller");
const bar = document.querySelector(".filled-bar");
const video = document.querySelector("video");
let text = document.querySelector(".rate-text");
console.log(text);

controller.addEventListener("mousemove", controlRate)


function controlRate(e) {
  let boxSize = this.getBoundingClientRect().bottom - this.getBoundingClientRect().top;
  let mousePosition = e.y - this.getBoundingClientRect().top;
  let rate = mousePosition/boxSize;
  let convertedRate = rate*4;
  bar.style.height = `${rate*100+0.5}%`
  video.playbackRate = convertedRate;
  text.textContent = `${String(convertedRate).substring(0, 4)}x`
}
