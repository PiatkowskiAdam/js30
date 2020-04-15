let drumTypes = document.querySelectorAll(".drum-type");

document.addEventListener("keydown", event => {
  let key = event.key.toLowerCase()
  drumTypes.forEach((item) => {
    if (item.id === key) {
      let sound = item.querySelector("audio");
      sound.currentTime = 0;
      sound.play();
      item.className += " badumtss";
      setTimeout(function(){
        item.className = "drum-type";
      }, 300)
    }
  });
})





//https://medium.com/javascript-in-plain-english/how-to-detect-a-sequence-of-keystrokes-in-javascript-83ec6ffd8e93
