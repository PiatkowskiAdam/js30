let allLinks = document.querySelectorAll("a");
allLinks.forEach(link => link.addEventListener("mouseover", highlighter));
let highlight = document.getElementById("highlight");

function highlighter(e) {
  let [targetPositionX, targetPositionY] = [this.getBoundingClientRect().x, this.getBoundingClientRect().y];
  [highlight.style.height, highlight.style.width] = [`${this.offsetHeight}px`, `${this.offsetWidth}px`];
  highlight.style.transform = `translate(
    ${targetPositionX + window.pageXOffset}px,
    ${targetPositionY + window.pageYOffset}px
  )`
}
