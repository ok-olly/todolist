const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const deleteToDo = e => {
  //   const li = e.target.parentElement;
  //   li.remove();

  e.target.parentElement.remove();
};

const paintToDo = newToDo => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newToDo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = e => {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
};

toDoForm.addEventListener('submit', handleToDoSubmit);
