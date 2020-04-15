let spacingBar = document.querySelector("#spacing");
let blurBar = document.querySelector("#blur");
let colorPicker = document.querySelector("#color");


spacingBar.addEventListener("change", spacingChanger);
blurBar.addEventListener("change", blurChanger);
colorPicker.addEventListener("change", colorChanger);

spacingBar.addEventListener("mousemove", spacingChanger);
blurBar.addEventListener("mousemove", blurChanger);

function spacingChanger(event) {
  let newValue = String(event.target.value + "px");
  document.documentElement.style.setProperty("--spacing", newValue);
}

function blurChanger(event) {
  let newValue = String(event.target.value + "px");
  document.documentElement.style.setProperty("--blur", newValue);

}

function colorChanger(event) {
  let newValue = String(event.target.value);
  document.documentElement.style.setProperty("--base-color", newValue);
}
