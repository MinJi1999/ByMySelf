"use strict";
const todoForm = document.querySelector(".js-todoForm");
const todoInput = document.querySelector(".js-todoInput");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";
let toDosArray = [];

function loadToDos(){
    const todos = localStorage.getItem(TODOS_LS);
    if(todos !== null){
        const todosValue = JSON.parse(todos);
        todosValue.forEach(function(todo){
            paintTodo(todo.text);
        })
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const todoId = toDosArray.length + 1;
    delBtn.innerText = "❎";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = todoId; 
    todoList.appendChild(li);
    const todosObj = {
        text : text,
        id : todoId
    };
    toDosArray.push(todosObj);
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArray));
}

function deleteTodo(event){
    const clickedBtn = event.target;
    const btnParent = clickedBtn.parentNode;
    todoList.removeChild(btnParent);
    const cleanTodo = toDosArray.filter(function(todo){
        return todo.id !== parseInt(btnParent.id);
    })
    toDosArray = cleanTodo;
    saveTodo(); //saveTodo는 매개변수필요ㄴ 그냥 저장소 저장
}

function init(){
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}
init();
