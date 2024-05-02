const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");

function randomGradient() {
  const nowColor1 = colors[Math.floor(Math.random() * colors.length)];
  const nowColor2 = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(to right, ${nowColor1},${nowColor2})`;
}
btn.addEventListener("click", randomGradient);

//challenge 5월2일 바닐라 JS 크리스마스 시계 만들기