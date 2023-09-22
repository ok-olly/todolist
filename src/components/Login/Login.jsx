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

  function handleLogOut() {
    const confirmLogout = confirm(
      'Do you really want to log out? Logging out will erase your saved lists.',
    );

    if (confirmLogout) {
      setIsLogin(false);
      localStorage.removeItem('savedUserName');
      localStorage.removeItem('savedToDos');
      setUserName('');
    }
  }

  useEffect(function () {
    const savedUserName = localStorage.getItem('savedUserName');
    if (savedUserName !== null) {
      setUserName(savedUserName);
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="w-full">
      {isLogin ? (
        <div className="flex h-80 flex-col items-center gap-3 rounded-md bg-yellow-200 px-5 py-3">
          <Greeting userName={userName} handleLogOut={handleLogOut} />
          <Todo />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="my-20">
          <input
            required
            maxLength="15"
            type="text"
            placeholder="What is your name?"
            value={userName}
            onChange={handleChange}
            className="rounded-md bg-stone-200 px-3 py-2 text-2xl placeholder:text-stone-600"
          />
        </form>
      )}
    </div>
  );
}

export default Login;
