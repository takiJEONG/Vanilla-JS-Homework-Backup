const userNumInput = document.querySelector("#userNumInput");
const rangeNumInput = document.getElementById("rangeNumInput");

const play = document.querySelector("#play");
const win = document.querySelector("#win");
const loose = document.querySelector("#loose");
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";

function makeRandNum(event) {
  event.preventDefault();
  const rangeNum = parseInt(rangeNumInput.value, 10);
  const machinNum = Math.ceil(Math.random() * rangeNum);
  const userNum = parseInt(userNumInput.value, 10);
  playResult(userNum, machinNum, rangeNum);
}

function playResult(userNum, machinNum, rangeNum) {
  console.log(userNum, machinNum);
  if (isNaN(userNum) === true || isNaN(machinNum) === true) {
    alert(`Write the number.`);
    loose.classList.add(HIDDEN_CLASSNAME);
    win.classList.add(HIDDEN_CLASSNAME);
    result.classList.add(HIDDEN_CLASSNAME);
    return;
  }
  result.innerText = `You chose: ${userNum}, the machin chose: ${machinNum}`;
  result.classList.remove(HIDDEN_CLASSNAME);

  if (userNum > rangeNum || machinNum < 0) {
    alert(`You write the wrong number.`);
    win.classList.add(HIDDEN_CLASSNAME);
    loose.classList.add(HIDDEN_CLASSNAME);
  } else if (userNum === machinNum) {
    win.classList.remove(HIDDEN_CLASSNAME);
    loose.classList.add(HIDDEN_CLASSNAME);
  } else {
    loose.classList.remove(HIDDEN_CLASSNAME);
    win.classList.add(HIDDEN_CLASSNAME);
  }
}

play.addEventListener("click", makeRandNum);

//challenge 4월30일 바닐라 JS