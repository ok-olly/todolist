import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteToDo = (i) => {
    setToDos(toDos.filter((item) => item !== toDos[i]));
  };

  const updateToDo = (i) => {
    // 입력창 열어주기
    // 포커스 맞춰주기
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            <button onClick={() => deleteToDo(index)}>❌</button>
            <button onClick={() => updateToDo(index)}>✏️</button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
