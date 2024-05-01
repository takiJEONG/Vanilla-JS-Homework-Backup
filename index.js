const clockTitle = document.querySelector(".js-clock");

const clock = setInterval(function () {
  const xmas = new Date("December 25 2024 00:00:00 GMT+0900").getTime();
  const now = new Date().getTime();
  const distance = xmas - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(clock);
    clockTitle.innerText = `IT'S D-DAY!!!`;
  }
}, 1000);

//challenge 5월1일 바닐라 JS 크리스마스 시계 만들기