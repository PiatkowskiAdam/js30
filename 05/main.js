const panelWrapper = document.querySelector(".panel-wrapper");

const allPanels = [...document.querySelectorAll(".panel")];



allPanels.forEach(panel => {
  panel.addEventListener("click", resizer);
});

function resizer(event) {

  let panelId = Number(event.target.id[event.target.id.length-1] - 1);
  allPanels[panelId].classList.toggle("wider");
  let allTextsInPanel = [...allPanels[panelId].querySelectorAll("span")]

  if (allPanels[panelId].className === "panel wider") {
    allTextsInPanel[1].style.transform = "scale(2)"
  } else {
    allTextsInPanel[1].style.transform = "scale(1)"
    allTextsInPanel[0].style.transform = "scale(0.75)"
    allTextsInPanel[2].style.transform = "scale(0.75)"
  }


  setTimeout(function() {
    if (allPanels[panelId].className === "panel wider") {
      allTextsInPanel[0].style.transform = "translateY(0)";
      allTextsInPanel[2].style.transform = "translateY(0)";
    } else {
        allTextsInPanel[0].style.transform = "translateY(-200px)";
        allPanels[panelId].childNodes[5].style.transform = "translateY(200px)";
        allPanels[panelId].childNodes.forEach((item) => item.style.transform = "scale(1)");
    }

  }, 500)

}
