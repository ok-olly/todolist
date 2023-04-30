const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const onLoginSubmit = e => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);

  // html 파일 속 input tag에 required과 maxlength="15"를 추가하면 아래의 js 코드 기능을 브라우저가 해준다.
  //   if (username === '') {
  //     alert('Please write your name.');
  //   } else if (username.length > 15) {
  //     alert('Your name is too long.');
  //   }
};

const paintGreetings = username => {
  greeting.innerHTML = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
