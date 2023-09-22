import { useState } from 'react';

function TodoList({ toDo, handleDelete, handleUpdate, handleCheck }) {
  const [updatedToDo, setUpdatedToDo] = useState(toDo.text);
  const [isUpdating, setIsUpdating] = useState(false);
  const [checked, setChecked] = useState(toDo.checked);

  return (
    <li id={toDo.id} className="flex items-center gap-1.5 border-b-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          handleCheck(toDo.id, !checked);
          setChecked(!checked);
        }}
      />

      {isUpdating ? (
        <>
          <input
            type="text"
            value={updatedToDo}
            onChange={e => {
              setUpdatedToDo(e.target.value);
            }}
            // size={26}
            className="grow rounded-sm"
          />
          <button
            onClick={e => {
              e.preventDefault();
              setIsUpdating(false);
              handleUpdate(toDo.id, updatedToDo);
            }}
          >
            💾
          </button>
        </>
      ) : (
        <>
          <span className={checked ? 'grow italic line-through' : 'grow'}>
            {toDo.text}
          </span>
          <button
            onClick={() => {
              setIsUpdating(!isUpdating);
            }}
          >
            ✏️
          </button>
        </>
      )}

      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

export default TodoList;
