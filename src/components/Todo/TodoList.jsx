import { useState } from 'react';

function TodoList({
  toDo,
  handleDelete,
  handleUpdate,
  handleCheck,
  selectedToDo,
  handleIsOpen,
}) {
  const [updatedToDo, setUpdatedToDo] = useState(toDo.text);
  const [checked, setChecked] = useState(toDo.checked);
  const isSelected = selectedToDo?.id === toDo.id;

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

      {isSelected ? (
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
              handleIsOpen(toDo);
              handleUpdate(toDo.id, updatedToDo);
            }}
            className="text-sm"
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
              handleIsOpen(toDo);
            }}
            className="text-sm"
          >
            ✏️
          </button>
        </>
      )}

      <button onClick={handleDelete} className="text-sm">
        ❌
      </button>
    </li>
  );
}

export default TodoList;
