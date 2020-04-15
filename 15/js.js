let ingredientsList = document.querySelector(".ingredients-list");
let miniForm = document.querySelector(".mini-form");
let textBox = miniForm.querySelector("input");
let addButton = miniForm.querySelector(".add-btn");
let removeButton = document.querySelector(".remove-btn");
let uncheckButton = document.querySelector(".uncheck-btn");
let checkButton = document.querySelector(".check-btn");

addButton.addEventListener("click", newItem);
removeButton.addEventListener("click", removeAllItems)
uncheckButton.addEventListener("click", uncheckAllItems)
checkButton.addEventListener("click", checkAllItems)
ingredientsList.addEventListener("click", itemMarker)

let items = []

checkLocalStorage()
if (items.length > 0) {
  restoreItems();
}


function checkLocalStorage() {
  if (localStorage.getItem("items")) {
    items = ("items :", JSON.parse(localStorage.getItem("items")));
  }
}

function restoreItems() {
  ingredientsList.textContent = '';
  items.forEach(item => {
    if (item.checked) {
      addItem(item.name, true)
    } else {
      addItem(item.name)
    }
  });
}

function newItem() {
  let ingredientName = textBox.value;
  textBox.value = "";
  if (!ingredientsList.querySelector("li")) {
    ingredientsList.textContent = '';
  }

  addItem(ingredientName)

  items.push({"name" : ingredientName, "checked" : false})
  localStorage.setItem("items", JSON.stringify(items));
}


function addItem(ingredient, checked=false) {
  let newListItem = document.createElement("li");
  newListItem.innerHTML = `<label><li><input type="checkbox" class="checkbox" ${checked ? "checked" : ""}> ${ingredient}</li></label>`
  ingredientsList.appendChild(newListItem);
}


function itemMarker(e) {
  if (e.target.matches("li")) {
    let listItem = String(e.target.textContent).trim();
    items.forEach(entry => {
      if (entry.name == listItem) {
        entry.checked = !entry.checked;
      }
    });
  }
  localStorage.setItem("items", JSON.stringify(items));
}



function removeAllItems() {
  localStorage.clear();
  checkLocalStorage();
  location.reload()
}


function uncheckAllItems() {
  if (ingredientsList.querySelector("li")) {
    ingredientsList.textContent = '';
  }

  items.forEach(entry => {
    entry.checked = false;
    addItem(entry.name)
  });
  localStorage.setItem("items", JSON.stringify(items));
}


function checkAllItems() {
  if (ingredientsList.querySelector("li")) {
    ingredientsList.textContent = '';
  }
  items.forEach(entry => {
    entry.checked = true;
    addItem(entry.name, true)
  });
  localStorage.setItem("items", JSON.stringify(items));
}
