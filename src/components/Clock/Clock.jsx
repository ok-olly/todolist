import { useEffect, useState } from 'react';

function formatTime(date) {
  return new Intl.DateTimeFormat('ko', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(date);
}

function Clock() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div>{time}</div>;
}

export default Clock;
