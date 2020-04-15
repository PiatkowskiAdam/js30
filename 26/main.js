let allListItems = document.querySelectorAll(".nav-li");
allListItems.forEach(listItem => listItem.addEventListener("mouseover", openSection));
allListItems.forEach(listItem => listItem.addEventListener("mouseout", closeSection));

let mobileBackground = document.querySelector(".mobile-background");

function openSection() {
 mobileBackground.style.opacity = 1;
 let content = this.querySelector(".li-content");
 let coordinates = this.getBoundingClientRect();

 content.classList.add("activated");


 mobileBackground.style.height = `${content.offsetHeight}px`;
 mobileBackground.style.width = `${content.offsetWidth}px`;

 mobileBackground.style.transform = `translate(
   ${coordinates.x}px,
   ${coordinates.y + 75}px
 ) translateX(-57%) translateX(75px)`
}

function closeSection() {

  let content = this.querySelector(".li-content");
  content.style.marginTop = "40px"
  content.classList.remove("activated");
  mobileBackground.style.opacity = 0;
}
