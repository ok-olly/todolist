import { useEffect, useState } from 'react';
import WeatherEmoji from 'weather-emoji';

function Weather() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emoji, setEmoji] = useState(null);
  const [hasError, setHasError] = useState(false);

  const weatherEmoji = new WeatherEmoji(import.meta.env.VITE_API_KEY);

  async function getWeatherData(url) {
    try {
      const data = await (await fetch(url)).json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
      console.log(err);
    }
  }

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`;
    getWeatherData(url);
  }

  function onGeoError() {
    setHasError(true);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  useEffect(() => {
    if (data === null) return;
    async function getEmoji() {
      try {
        const emoji = await weatherEmoji.getWeather(data.name, true);
        setEmoji(emoji.emoji);
      } catch (err) {
        setHasError(true);
        console.log(err);
      }
    }
    getEmoji();
  }, [data]);

  return (
    <div className="flex flex-col items-end text-sm">
      {hasError ? (
        <span>Something went wrong...</span>
      ) : isLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <span>{data.name}</span>
          <span>
            {data.weather[0].main} {emoji}
          </span>
          <span>{Math.floor(data.main.temp)}&#8451;</span>
        </>
      )}
    </div>
  );
}

export default Weather;
