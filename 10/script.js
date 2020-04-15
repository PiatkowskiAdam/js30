let allCheckboxes = document.querySelectorAll("input");


allCheckboxes.forEach(item => {
  item.addEventListener("change", checkboxHandler)
});

let shiftPressed = false;

window.addEventListener("keydown", shiftDown);
window.addEventListener("keyup", shiftUp);

let currentItem;
let allItems = [...document.querySelectorAll(".item")];

function checkboxHandler(e) {
  let parent = e.target.parentNode;
  parent.classList.toggle("checked");

  if (parent.className.includes("checked")) {
    if (currentItem && shiftPressed) {
      let thisIndex = allItems.indexOf(this.parentNode);
      let lastIndex = allItems.indexOf(currentItem);
      checkAllInBetween(thisIndex, lastIndex)
    }
    currentItem = this.parentNode;
  }
  function checkAllInBetween(index1, index2) {
    if (index1 < index2) {
      for (var i = index1+1; i < index2; i++) {
        if (!allItems[i].className.includes("checked")) {
          allItems[i].className += " checked"
          allItems[i].querySelector("input").checked = true;
        }
      }
    } else {
      for (var i = index2; i < index1; i++) {
        if (!allItems[i].className.includes("checked")) {
          allItems[i].className += " checked"
          allItems[i].querySelector("input").checked = true;
        }
    }
  }
}
}




function shiftDown(e) {
  if (e.key === "Shift") {
    shiftPressed = true;
  }
}

function shiftUp(e) {
  if (e.key === "Shift") {
    shiftPressed = false;
  }
}
