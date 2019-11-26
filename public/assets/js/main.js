"use strict";

const openModalBtn = document.getElementById("modal-trigger");
const modal = document.getElementById("myModal");
const addBtn = document.querySelector(".js-addBtn");
const inputTask = document.querySelector(".js-input");

let newTasks = [];

const getTasksFromLocalStorage = () => {
  JSON.parse(localStorage.getItem("task"));
};

const setTasksIntoLocalStorage = () => {
  localStorage.setItem("task", JSON.stringify(newTasks));
};

function openModalTask() {
  modal.classList.remove("is-hidden");
}

function closeModalTask() {
  modal.classList.add("is-hidden");
}

function addTask(ev) {
  ev.preventDefault();
  modal.classList.add("is-hidden");
  const list = document.querySelector(".js-list");
  const taskName = document.querySelector(".js-input").value;
  newTasks.push(taskName);
  list.innerHTML += `<li class="list__item"><input id="checkbox" type="checkbox" /><p id="task-text">${taskName}</p></li>`;
  setTasksIntoLocalStorage();
}

getTasksFromLocalStorage();
openModalBtn.addEventListener("click", openModalTask);
addBtn.addEventListener("click", addTask);

//# sourceMappingURL=main.js.map
