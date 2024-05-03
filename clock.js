const TIME_DOM = document.querySelector('.js-time');
const DAY_DOM = document.querySelector('.js-day');
const DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

function getTime() {
  const nowDate = new Date();
  let hour = nowDate.getHours(),
    min = nowDate.getMinutes(),
    second = nowDate.getSeconds();
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  second = second < 10 ? `0${second}` : second;
  TIME_DOM.innerHTML = `${hour}:${min}:${second}`;
}

function getDay() {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();
  const dayLabel = nowDate.getDay();
  DAY_DOM.innerHTML = `${year}년 ${month+1}월 ${date}일 ${DAYS[dayLabel]}`
}

function init() {
  setInterval(getTime, 1000);
  getDay();
}
init();