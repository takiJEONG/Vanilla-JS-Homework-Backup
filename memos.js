const h1= document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
 h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);

const bd = document.querySelector("body");
const h1 = document.querySelector("body h1");
function resize() {
  let width = window.innerWidth;
  if (width >= 900) {
    h1.classList.add("active");
    bd.style.backgroundColor = "orange";
  } else if (width < 900 && width >= 800) {
    h1.classList.add("active");
    bd.style.backgroundColor = "yellow";
  } else if (width < 800 && width >= 700) {
    h1.classList.add("active");
    bd.style.backgroundColor = "skyblue";
  }
}
window.addEventListener("resize", resize);
const bd = document.querySelector("body");
const h1 = document.querySelector("body h1");
function resize() {
  let width = window.innerWidth;
  if (width >= 900) {
    h1.classList.add("active");
    bd.style.backgroundColor = "orange";
  } else if (width < 900 && width >= 800) {
    h1.classList.add("active");
    bd.style.backgroundColor = "yellow";
  } else if (width < 800 && width >= 700) {
    h1.classList.add("active");
    bd.style.backgroundColor = "skyblue";
  }
}
window.addEventListener("resize", resize);

//challenge 4월26일 바닐라 JS

//challenge 4월26일 바닐라 JS