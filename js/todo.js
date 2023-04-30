const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = e => {
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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(item => paintToDo(item));
}
