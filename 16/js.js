let header = document.querySelector("h1");
window.addEventListener("mousemove", shadowEffect);

function shadowEffect(e) {
  let horizontalCentre = innerWidth/2;
  let verticalCentre = innerHeight/2;

  let shadowHorizontalMove = (e.x - horizontalCentre) * 0.7;
  let shadowVerticalMove = (e.y - verticalCentre) * 0.7;

  console.log(shadowHorizontalMove, shadowVerticalMove);

  header.style.textShadow = `
    ${shadowHorizontalMove}px ${shadowVerticalMove}px 0 rgba(255, 0, 0, 0.8),
    ${shadowHorizontalMove*-1}px ${shadowVerticalMove*-1}px 0 rgba(0, 255, 0, 0.8),
    ${shadowVerticalMove}px ${shadowHorizontalMove*-1}px 0 rgba(0, 0, 255, 0.8),
    ${shadowVerticalMove*-1}px ${shadowHorizontalMove*-1}px 0 rgba(255, 0, 255, 0.8)
  `
}
