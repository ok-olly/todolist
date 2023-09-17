import { useState } from 'react';

function TodoList({ toDo, handleDelete, toDos, setToDos }) {
  const [updateToDo, setUpdateToDo] = useState(toDo.text);
  const [isUpdating, setIsUpdating] = useState(false);

  function handleSubmit(e) {
    setIsUpdating(false);

    setToDos(
      toDos.map(td => {
        if (td.id === +e.target.parentElement.id) {
          return { text: updateToDo, id: td.id };
        }
        return td;
      })
    );
  }

  return (
    <li id={toDo.id}>
      <span>{toDo.text}</span>
      {isUpdating ? (
        <>
          <input
            type="text"
            value={updateToDo}
            onChange={e => {
              setUpdateToDo(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>💾</button>
        </>
      ) : (
        <button
          onClick={() => {
            setIsUpdating(!isUpdating);
          }}
        >
          ✏️
        </button>
      )}

      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

export default TodoList;
