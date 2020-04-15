const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.querySelector(".bands")

let sortedBands = sortWithoutArticles(bands);
console.log(sortedBands);


bands.forEach(band => {
  let newBand = document.createElement("li");
  newBand.textContent = band;
  bandsList.appendChild(newBand)
});



function sortWithoutArticles(array) {
  let sortedArray = array.sort((a, b) => {
    let title1 = articleTrimmer(a)
    let title2 = articleTrimmer(b)
    if (title1 > title2) return 1;
    else if (title2 > title1) return -1;
    else return 0;
  })
  return sortedArray

  function articleTrimmer(title) {
    if (title.slice(0, 3).toLowerCase() === "an ") {
      return title.slice(3)
    } else if (title.slice(0, 2).toLowerCase() === "a ") {
      return title.slice(2)
    } else if (title.slice(0, 4).toLowerCase() === "the ") {
      return title.slice(4)
    } else {
      return title
    }
  }
}
