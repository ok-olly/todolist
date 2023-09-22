import { useEffect, useState } from 'react';

function formatTime(date) {
  return new Intl.DateTimeFormat('en', {
    // dateStyle: 'medium',
    // timeStyle: 'medium',

    // weekday: 'long',
    // year: 'numeric',
    // month: 'long',
    // day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

const today = formatDate(new Date());
const convertedToday = today
  .split(' ')
  .map(day => (day.slice(-1) === ',' ? day.slice(0, -1) : day));
const [day, month, date, year] = convertedToday;

function Clock() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full items-center justify-between text-base text-stone-800">
      <div className="flex items-center gap-3">
        <span className="text-5xl font-semibold">{date}</span>
        <div className="flex flex-col">
          <span className="uppercase">{month}</span>
          <span className="text-stone-500">{year}</span>
        </div>
      </div>

      <div className="flex w-28 flex-col items-end">
        <span className="uppercase ">{day}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Clock;
