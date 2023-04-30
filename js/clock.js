const clock = document.querySelector('#clock');

// const sayHello = () => {
//   console.log('hello');
// };

// 5초마다 반복
// setInterval(sayHello, 5000);

// 5초 후 한 번 실행
// setTimeout(sayHello, 5000);

const getClock = () => {
  const date = new Date();
  clock.innerText = `${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

setInterval(getClock, 1000);
