let allImages = document.querySelectorAll("img")

let options = {};

let observer = new IntersectionObserver(slideIn, options);
allImages.forEach((image) => {
  observer.observe(image)
});


function slideIn(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translate(0, 0)";
      entry.target.style.opacity = "1";
    } else if (!entry.isIntersecting && entry.target.className === "align-left"){
      entry.target.style.transform = "translate(-90%, 0)";
      entry.target.style.opacity = "0.2";
    } else {
      entry.target.style.transform = "translate(90%, 0)";
      entry.target.style.opacity = "0.2";
    }
  });
}


// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
