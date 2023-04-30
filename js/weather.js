const API_KEY = '45e58b144b1adbf558fdd8bcd35485a3';

const onGeoOk = position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
};

const onGeoError = () => {
  alert("Can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
