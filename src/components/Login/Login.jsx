import { useEffect, useState } from 'react';
import Greeting from '../Greeting/Greeting';
import Todo from '../Todo/Todo';

function Login() {
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    setIsLogin(true);
    localStorage.setItem('savedUserName', userName);
  }

  function handleClick() {
    setIsLogin(false);
    localStorage.removeItem('savedUserName');
    localStorage.removeItem('savedToDos');
    setUserName('');
  }

  useEffect(function () {
    const savedUserName = localStorage.getItem('savedUserName');
    if (savedUserName !== null) {
      setUserName(savedUserName);
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      {isLogin ? (
        <>
          <Greeting userName={userName} handleClick={handleClick} />
          <Todo />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            required
            maxLength="15"
            type="text"
            placeholder="What is your name?"
            value={userName}
            onChange={handleChange}
          />
        </form>
      )}
    </div>
  );
}

export default Login;
