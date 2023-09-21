import { useState } from 'react';

function TodoList({ toDo, handleDelete, handleUpdate, handleCheck }) {
  const [updatedToDo, setUpdatedToDo] = useState(toDo.text);
  const [isUpdating, setIsUpdating] = useState(false);
  const [checked, setChecked] = useState(toDo.checked);

  return (
    <li id={toDo.id} className="relative border-b-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          handleCheck(toDo.id, !checked);
          setChecked(!checked);
        }}
        className="mr-2"
      />

      {isUpdating ? (
        <>
          <input
            type="text"
            value={updatedToDo}
            onChange={e => {
              setUpdatedToDo(e.target.value);
            }}
            size={21}
            className="rounded-sm"
          />
          <button
            onClick={e => {
              e.preventDefault();
              setIsUpdating(false);
              handleUpdate(toDo.id, updatedToDo);
            }}
            className="absolute right-5"
          >
            💾
          </button>
        </>
      ) : (
        <>
          <span className={checked ? 'line-through italic' : ''}>
            {toDo.text}
          </span>
          <button
            onClick={() => {
              setIsUpdating(!isUpdating);
            }}
            className="absolute right-5"
          >
            ✏️
          </button>
        </>
      )}

      <button onClick={handleDelete} className="absolute right-0">
        ❌
      </button>
    </li>
  );
}

export default TodoList;
