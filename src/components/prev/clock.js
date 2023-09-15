const clock = document.querySelector('#clock');

const getClock = () => {
  const date = new Date();
  clock.innerText = `${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

setInterval(getClock, 1000);
