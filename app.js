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