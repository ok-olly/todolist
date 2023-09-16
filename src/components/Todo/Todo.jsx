import { useEffect, useState } from 'react';

function Todo() {
  const [newToDo, setNewToDo] = useState('');
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem('savedToDos')) || []
  );

  function handleChange(e) {
    setNewToDo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNewToDo('');
    setToDos(toDos => [...toDos, { text: newToDo, id: Date.now() }]);
  }

  function handleDelete(e) {
    setToDos(toDos => toDos.filter(toDo => toDo.id !== +e.target.id));
  }

  useEffect(() => {
    localStorage.setItem('savedToDos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a To Do and Press Enter"
          required
          value={newToDo}
          onChange={handleChange}
        />
      </form>
      <ul>
        {toDos.length !== 0 &&
          toDos.map(toDo => (
            <li key={toDo.id}>
              <span>{toDo.text}</span>
              <button onClick={handleDelete} id={toDo.id}>
                ❌
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
