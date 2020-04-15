let video = document.querySelector("#video-element");
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let captureButton = document.querySelector("#take-picture");
let allPictures = document.querySelector("#all-pictures");


captureButton.addEventListener("click", takePicture)

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({video: true})
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong: ", err0r);
    });
}


function takePicture() {
  [canvas.height, canvas.width] = [video.videoHeight, video.videoWidth];
  context.drawImage(video, 0, 0);

  let newImgURL = canvas.toDataURL();
  let newImg = new Image();
  let newLink = document.createElement("a");
  let polaroid = document.createElement("div");

  polaroid.setAttribute("class", "polaroid")
  allPictures.appendChild(polaroid);
  polaroid.appendChild(newLink);
  newLink.setAttribute("download", "cutie");

  newImg.setAttribute("src", newImgURL);
  newImg.setAttribute("class", "dark");
  let href = newImg.src;
  newLink.setAttribute("href", href);
  newLink.appendChild(newImg);

  polaroid.style.transform = `rotate(${randomNumber(-40, 40)}deg)`
  let audio = new Audio("snap.mp3");
  audio.play();
}




function randomNumber(min, max) {
  let allNums = [];

  for (let i = min; i <= max; i++) {
    allNums.push(i)
  }

  return allNums[Math.floor(Math.random() * allNums.length)];

}
