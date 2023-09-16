import { useEffect, useState } from 'react';

function Weather() {
  const [data, setData] = useState(null);

  const getWeather = async url => {
    const data = await (await fetch(url)).json();
    setData(data);
  };

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`;
    getWeather(url);
  }

  function onGeoError() {
    alert("Can't find you");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return (
    <div>
      {data && (
        <>
          <span>{data.name} 😇</span>
          <span>
            {data.weather[0].main} / {data.main.temp}
          </span>
        </>
      )}
    </div>
  );
}

export default Weather;
