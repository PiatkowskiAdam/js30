



function rotateHands() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".minute-hand");
  let secondHand = document.querySelector(".second-hand");

  secondHand.style.transform = "rotate(" + 6*seconds + "deg)";
  minuteHand.style.transform = "rotate(" + 6*minutes + "deg)";
  hourHand.style.transform = "rotate(" + 6*hours + "deg)";
}



setInterval(rotateHands, 1000);
