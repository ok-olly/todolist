import Login from './components/Login/Login';
import Clock from './components/Clock/Clock';
import Quote from './components/Quote/Quote';
import Weather from './components/Weather/Weather';
import GitHubIcon from '@mui/icons-material/GitHub';

export function App() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-stone-200">
      <div className="flex w-96 flex-col items-center justify-between gap-5 rounded-md bg-stone-100 p-6">
        <Clock />
        <Login />
        <div className="flex w-full justify-between">
          <Quote />
          <Weather />
        </div>
      </div>
      <div className="absolute bottom-3">
        <a href="https://github.com/ok-olly/todolist" target="_blank">
          <span className="mr-1 text-sm text-stone-500">
            made by Jeongok Lee
          </span>
          <GitHubIcon fontSize="small" sx={{ color: '#78716c' }} />
        </a>
      </div>
    </div>
  );
}

export default App;
