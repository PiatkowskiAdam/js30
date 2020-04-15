let mousedown = false;
const installation = document.querySelector(".installation");

installation.addEventListener('mousemove', dragAndScroll);
installation.addEventListener('mousedown', () => {
  installation.style.cursor = "grabbing";
  installation.style.transform = "scale(1)";
  mousedown = true;
});

window.addEventListener('mouseup', () => {
  mousedown = false;
  installation.style.transform = '';
  if (installation.style.cursor === "grabbing") {
    installation.style.cursor = '';
  }
});



let lastX = 0;

function dragAndScroll(e) {

  if (mousedown) {
    const currentX = e.x;
    if (currentX > lastX) {
      installation.scrollLeft -= 45;
      lastX = currentX;


    } else if (currentX < lastX) {
      installation.scrollLeft += 45;
      console.log("left");
      lastX = currentX
    }
  }
}
