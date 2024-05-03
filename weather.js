const WEATHER_TODAY = document.querySelector('.js-weather-today');
const WEATHER_WEEKLY = document.querySelector('.js-weather-weekly');
const WEATHER_ICON = document.querySelector('#weather-i');
const CITY_NAME = document.querySelector('#js-city-name');
const CURRENT_TEMP = document.querySelector('#js-current-temp');
const API_KEY = '711aab91dc475287f78c916e62cd45f8';
const KEY_COORDS = 'coords';
const KEY_CITY = 'city';

function saveCoordsLs(obj) {
  localStorage.setItem(KEY_COORDS, JSON.stringify(obj));
}

function saveCityLs(city) {
  localStorage.setItem(KEY_CITY, city);
}

function handleSuccessGeo(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coordsObj = { latitude, longitude };
  saveCoordsLs(coordsObj);
  getWeather(latitude, longitude);
  getWeeklyWeather(latitude, longitude);
}

function handleFailGeo() {
  alert("Can't access current position");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccessGeo, handleFailGeo);
}

function getWeatherIcon(weatherId, isDay) {
  const figure = document.createElement('figure');
  const i = document.createElement('i');
  const parseWeatherId = weatherId.toString();
  if (parseWeatherId.startsWith('2')) {
    i.className = isDay ? 'fas fa-bolt js-weather fa-5x' : 'fas fa-bolt js-weather fa-2x';
  } else if (parseWeatherId.startsWith('3')) {
    i.className = isDay ? 'fas fa-water js-weather fa-5x' : 'fas fa-water js-weather fa-2x';
  } else if (parseWeatherId.startsWith('5')) {
    i.className = isDay ? 'fas fa-cloud-rain js-weather fa-5x' : 'fas fa-cloud-rain js-weather fa-2x';
  } else if (parseWeatherId.startsWith('6')) {
    i.className = isDay ? 'fas fa-snowflake js-weather fa-5x' : 'fas fa-snowflake js-weather fa-2x';
  } else if (parseWeatherId.startsWith('7')) {
    i.className = isDay ? 'fas fa-smog js-weather fa-5x' : 'fas fa-smog js-weather fa-2x';
  } else if (weatherId > 800) {
    i.className = isDay ? 'fas fa-cloud js-weather fa-5x' : 'fas fa-cloud js-weather fa-2x';
  } else {
    i.className = isDay ? 'fas fa-sun js-weather fa-5x' : 'fas fa-sun js-weather fa-2x';
  }
  return figure.appendChild(i);
}

async function getWeather(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`);
  if(response.ok) {
    const {weather, main ,name} = await response.json();
    saveCityLs(name);
    const weatherIcon = getWeatherIcon(weather[0].id, true);
    const cityName = document.createElement('h4');
    const currentTemp = document.createElement('h4');
    
    cityName.innerText = name;
    currentTemp.innerText = `현재 기온 : ${main.temp}℃`
    WEATHER_TODAY.appendChild(weatherIcon);
    WEATHER_TODAY.appendChild(cityName);
    WEATHER_TODAY.appendChild(currentTemp);
  }
}

async function getWeeklyWeather(lat, lon) {
  const today = new Date();
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily}&appid=${API_KEY}&units=metric&lang=kr`);
  if(response.ok) {
    const {daily} = await response.json();
    const weekly = daily.slice(1);
    const dayLabel =today.getDay();
    let index = dayLabel;
    weekly.forEach((day) => {
      const {weather,temp} = day;
      const weatherIcon = getWeatherIcon(weather[0].id, false);
      const dailyContainer = document.createElement('div');
      dailyContainer.id = 'dailyContainer';
      const dayDiv = document.createElement('div');
      const tempMinDiv = document.createElement('div');
      const tempMaxDiv = document.createElement('div');
      dayDiv.innerText = `${DAYS.at((++index)-7).substring(0,1)}`
      tempMinDiv.innerText = `${temp.min} `;
      tempMaxDiv.innerText = `${temp.max} `;
      dailyContainer.appendChild(dayDiv);
      dailyContainer.appendChild(weatherIcon);
      dailyContainer.appendChild(tempMinDiv);
      dailyContainer.appendChild(tempMaxDiv);
      WEATHER_WEEKLY.appendChild(dailyContainer);
    });    
  };
}

function infoLoad() {
  const getcoords = localStorage.getItem(KEY_COORDS);
  if (getcoords !== null) {
    const parseCoords = JSON.parse(getcoords);
    getWeather(parseCoords.latitude, parseCoords.longitude, true);
    getWeeklyWeather(parseCoords.latitude, parseCoords.longitude, false);
  } else {
    askCoords();
  }
}

function init() {
  infoLoad();
}
init();