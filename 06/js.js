let cities = []

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(city => {
      cities.push({
        "name" : city.city,
        "state" : city.state,
        "population"  : city.population
      })
    });

  })
  .catch(error => {
    console.log("An error Occurred")
  });

let searchBox = document.querySelector(".finder");
searchBox.addEventListener("keyup", citySorter);



function citySorter(event) {
  let soughtCity = event.target.value;
  let filteredByState = cities.filter(city => city.state.toLowerCase().includes(soughtCity));
  let filteredByCity = cities.filter(city => city.name.toLowerCase().includes(soughtCity));
  let allCities = [...new Set(filteredByState.concat(filteredByCity))];
  let cityList = document.querySelector(".city-list");
  cityList.innerHTML = "";

  let currentListItem = "odd";

  allCities.forEach(city => {
    let newListItem = document.createElement("div");

    let newPara = document.createElement("span");
    newPara.setAttribute("class", "left-align")
    newPara.textContent = `${city.name}, ${city.state}`;

    let newSpan = document.createElement("span");
    newSpan.setAttribute("class", "right-align")
    newSpan.textContent = formatNumber(city.population)

    newListItem.appendChild(newPara);
    newListItem.appendChild(newSpan);


    if (currentListItem === "odd") {
      newListItem.setAttribute("class", "additional-info additional-info-odd");
      currentListItem = "even";
    } else {
      newListItem.setAttribute("class", "additional-info additional-info-even");
      currentListItem = "odd";
    }
    cityList.appendChild(newListItem)
  });
}


function formatNumber(num) {
  let parsedDigits = 1;
  let formattedNum = '';

  for (let i = 0; i < num.length; i++) {
    formattedNum += num[i];
    if (((num.length - parsedDigits) % 3 === 0) && (i !== num.length - 1)) {
      formattedNum += ","
    }
    parsedDigits++
  }
  return formattedNum
}
