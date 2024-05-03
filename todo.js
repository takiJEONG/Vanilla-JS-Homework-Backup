const TODO_FORM = document.querySelector('.js-todo-form');
const TODO_INPUT = TODO_FORM.querySelector('input');
const TODO_UL = document.querySelector('.js-todo-ul');
const FINISH_UL = document.querySelector('.js-finish-ul');
const KEY_TODO = 'todoList';
const KEY_FINISH = 'finishList';
let todoList = [];
let finishList = [];

function saveTodoLs() {
  localStorage.setItem(KEY_TODO, JSON.stringify(todoList));
}

function saveFinishLs() {
  localStorage.setItem(KEY_FINISH, JSON.stringify(finishList));
}

function filterTodo(id) {
  const notChecked = todoList.filter((todo) => todo.id !== parseInt(id));
  return notChecked;
}

function filterFinish(id) {
  const notFinish = finishList.filter((finish) => finish.id !== parseInt(id));
  return notFinish;
}

function handelTodoCheckBox(e) {
  const checkedId = e.target.parentElement.id;
  const checkedLi = e.target.parentElement;
  const checkedTodo = e.target.parentElement.childNodes[1].innerHTML;

  TODO_UL.removeChild(checkedLi);
  todoList = filterTodo(checkedId);
  saveTodoLs();
  addFinishTodoList(checkedTodo);
}

function handelTodoBtnClick(e) {
  const delId = e.target.parentElement.id;
  const delLi = e.target.parentElement;
  TODO_UL.removeChild(delLi);
  todoList = filterTodo(delId);
  saveTodoLs();
}

function handleFinishCheckBox(e) {
  const backTodoId = e.target.parentElement.id;
  const backTodoLi = e.target.parentElement;
  const backTodo = e.target.parentElement.childNodes[1].innerHTML;

  FINISH_UL.removeChild(backTodoLi);
  finishList = filterFinish(backTodoId);
  saveFinishLs();
  addTodoList(backTodo);
}

function handleFinishBtnClick(e) {
  const finishDelId = e.target.parentElement.id;
  const finishDelLi = e.target.parentElement;

  FINISH_UL.removeChild(finishDelLi);
  finishList = filterFinish(finishDelId);
  saveFinishLs();
}

function addTodoList(todo) {
  const todoSpna = document.createElement('span');
  const todoCheckBox = document.createElement('input');
  const todoBtn = document.createElement('button');
  const todoLi = document.createElement('li');
  let todoLen = todoList.length;

  todoSpna.innerHTML = todo;
  todoCheckBox.type = 'checkbox';
  todoCheckBox.addEventListener('change', handelTodoCheckBox);
  todoBtn.innerHTML = '❌';
  todoBtn.addEventListener('click', handelTodoBtnClick);

  todoLi.appendChild(todoCheckBox);
  todoLi.appendChild(todoSpna);
  todoLi.appendChild(todoBtn);
  todoLi.id = todoLen;
  TODO_UL.appendChild(todoLi);

  const todoObj = {
    id: todoLen,
    todo: todo,
  };

  todoList.push(todoObj);
  saveTodoLs();
}

function addFinishTodoList(finish) {
  const finishSpan = document.createElement('span');
  const finishCheckBox = document.createElement('input');
  const finishBtn = document.createElement('button');
  const finishLi = document.createElement('li');
  const finishLen = finishList.length;

  finishSpan.innerHTML = finish;
  finishCheckBox.type = 'checkbox';
  finishCheckBox.addEventListener('change', handleFinishCheckBox);
  finishBtn.innerHTML = '❌';
  finishBtn.addEventListener('click', handleFinishBtnClick);

  finishLi.appendChild(finishCheckBox);
  finishLi.appendChild(finishSpan);
  finishLi.appendChild(finishBtn);
  finishLi.id = finishLen;
  FINISH_UL.appendChild(finishLi);

  const finishObj = {
    id: finishLen,
    finish: finish,
  };

  finishList.push(finishObj);
  saveFinishLs();
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const todo = TODO_INPUT.value;
  addTodoList(todo);
  TODO_INPUT.value = '';
}

function loadTodo() {
  const getTodo = localStorage.getItem(KEY_TODO);
  const getFinish = localStorage.getItem(KEY_FINISH);
  if (getTodo !== null) {
    const parseTodo = JSON.parse(getTodo);
    parseTodo.forEach((todo) => addTodoList(todo.todo));
  }
  if (getFinish !== null) {
    const parseFinish = JSON.parse(getFinish);
    parseFinish.forEach((finish) => addFinishTodoList(finish.finish));
  }
}

function init() {
  TODO_FORM.addEventListener('submit', handleTodoSubmit);
  loadTodo();
}
init();

