import Login from './components/Login/Login';
import Clock from './components/Clock/Clock';
import Quote from './components/Quote/Quote';
import Weather from './components/Weather/Weather';

export function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-stone-200">
      <div className="flex rounded-md flex-col gap-5 items-center justify-between bg-stone-100 p-6 w-96">
        <Clock />
        <Login />
        <div className="flex justify-between w-80">
          <Quote />
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
