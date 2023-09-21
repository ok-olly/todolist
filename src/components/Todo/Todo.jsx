import { useEffect, useState } from 'react';
import TodoList from './TodoList';

const initialState = [
  { id: 123, text: '점심에 떡볶이 먹기😋', checked: true },
  { id: 456, text: '저녁에는 치킨 먹기🍗', checked: false },
];

function Todo() {
  const [newToDo, setNewToDo] = useState('');
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem('savedToDos')) || initialState,
  );

  function handleSubmit(e) {
    e.preventDefault();
    setNewToDo('');
    setToDos(toDos => [
      ...toDos,
      { id: Date.now(), text: newToDo, checked: false },
    ]);
  }

  function handleDelete(e) {
    setToDos(toDos =>
      toDos.filter(toDo => toDo.id !== +e.target.parentElement.id),
    );
  }

  function handleUpdate(id, updatedToDo) {
    setToDos(
      toDos.map(td => {
        if (td.id === id) {
          return { id: td.id, text: updatedToDo, checked: td.checked };
        }
        return td;
      }),
    );
  }

  function handleCheck(id, checked) {
    setToDos(
      toDos.map(td => {
        if (td.id === id) {
          return { id: td.id, text: td.text, checked: checked };
        }
        return td;
      }),
    );
  }

  useEffect(() => {
    localStorage.setItem('savedToDos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          placeholder="Write a To Do and Press Enter :)"
          required
          value={newToDo}
          onChange={e => setNewToDo(e.target.value)}
          size={26}
          className="px-3 py-1 rounded-sm"
        />
      </form>
      <ul className="flex flex-col gap-1 overflow-auto h-48">
        {toDos.length !== 0 &&
          toDos.map(toDo => (
            <TodoList
              key={toDo.id}
              toDo={toDo}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              handleCheck={handleCheck}
            />
          ))}
      </ul>
    </div>
  );
}

export default Todo;
