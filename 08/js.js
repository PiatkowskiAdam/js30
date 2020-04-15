let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let [x, y] = [0, 0];
let [hue, hueIncrementor] = [0, 1]
let [size, sizeIncrementor] = [30, 0.1]

window.addEventListener("mousemove", mouseLocation)
window.addEventListener("mousedown", whileMouseDown)
window.addEventListener("mouseup", whileMouseUp)

let mousedown = false;
console.log(mousedown);

function whileMouseDown() {
  mousedown = true;
  if (mousedown) {
    mousedown = setInterval(draw, 1)
  }
}

function whileMouseUp() {
  clearInterval(mousedown)
  mousedown = false;
}


function mouseLocation(e) {
  x = e.x;
  y = e.y;
}

function draw() {
  ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${hue}, 75%, 50%)`
  ctx.fill();

  hue += hueIncrementor;
  size += sizeIncrementor;

  if(hueIncrementor === 360) {
    hueIncrementor = -1;
  } else if (hueIncrementor === 0) {
    hueIncrementor = 1;
  }

  if (size > 50) {
    sizeIncrementor = -0.1;
  } else if (size < 6) {
    sizeIncrementor = 0.1;
  }
}






/*
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
look for:
Lines
For drawing straight lines, use the lineTo() method.
*/
