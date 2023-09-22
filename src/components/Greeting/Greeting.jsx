import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

// eslint-disable-next-line react/prop-types
function Greeting({ userName, handleLogOut }) {
  return (
    <div className="flex w-full justify-between text-stone-800">
      <button onClick={handleLogOut}>
        <LogoutRoundedIcon fontSize="small" />
      </button>
      <h1 className="text-2xl">Hi, {userName} 👋</h1>
    </div>
  );
}

export default Greeting;
