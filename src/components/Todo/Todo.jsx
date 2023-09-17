import { useEffect, useState } from 'react';
import TodoList from './TodoList';

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
    setToDos(toDos =>
      toDos.filter(toDo => toDo.id !== +e.target.parentElement.id)
    );
  }

  useEffect(() => {
    localStorage.setItem('savedToDos', JSON.stringify(toDos));
    console.log('렌더', toDos);
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
            <TodoList
              key={toDo.id}
              toDo={toDo}
              handleDelete={handleDelete}
              toDos={toDos}
              setToDos={setToDos}
            />
          ))}
      </ul>
    </div>
  );
}

export default Todo;
