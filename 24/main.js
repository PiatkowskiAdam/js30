let navbar = document.querySelector("nav");
let fixed = false;
let mainSection = document.querySelector("main");
let navbarList = document.querySelector("ul");
let lostItem = document.querySelector("#lost")

window.addEventListener("scroll", checkPosition);



function checkPosition() {
  if (!fixed) {
    if (navbar.getBoundingClientRect().y < 0) {
      mainSection.style.transform = 'scale(1.03)';
      fixed = true;
      navbar.classList.add("fixed");
      lostItem.style.maxWidth = "500px";
      lostItem.style.padding = "30px";
      document.body.style.paddingTop = (navbar.offsetHeight + 60) + "px";

    }
  } else {
    if (mainSection.getBoundingClientRect().y > 140) {
      mainSection.style.transform = 'scale(1)';
      fixed = false;
      navbar.classList.remove("fixed")
      lostItem.style.maxWidth = "0";
      lostItem.style.paddingLeft = "0";
      lostItem.style.paddingRight = "0";
    };

  }
};
