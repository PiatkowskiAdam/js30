const videos = document.querySelectorAll("li");

let totalDuration = totalTime(videos);
console.log(totalDuration);

function totalTime(array) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let timeSplitted = [];

  videos.forEach(video => {
    let videoSplit = video.dataset.time.split(":");
    [videoSplit[0], videoSplit[1]] = [Number(videoSplit[0]), Number(videoSplit[1])];
    timeSplitted.push(videoSplit);
  });

  minutes = timeSplitted.reduce((total, accummulator) => total + accummulator[0], 0)
  seconds = timeSplitted.reduce((total, accummulator) => total + accummulator[1], 0)

  minutes += Math.floor(seconds/60);
  seconds = seconds % 60;

  hours += Math.floor(minutes/60);
  minutes = minutes % 60;

  return `${hours}:${minutes}:${seconds}`
}
