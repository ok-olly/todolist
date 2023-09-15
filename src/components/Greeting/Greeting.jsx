// eslint-disable-next-line react/prop-types
function Greeting({ userName, handleClick }) {
  return (
    <div>
      <h1>Hello, {userName} 👋</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  );
}

export default Greeting;
