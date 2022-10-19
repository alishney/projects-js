"use strict";
//const listWrapper = document.querySelector('.list-wrapper');
const addTaskButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('input-task');
const taskList = document.querySelector('#task-list');

const getTaskTemplate = (taskText) => {
    return `<label class="task">
                      <input type="checkbox" class="checkmark">
                      <span class="fake-checkmark"></span>
                      <span class="task-text">${taskText}</span>
                      <button class="delete-btn">x</button>
             </label>`;
}

function clearTaskInput() {
    taskInput.value = ''
}

function addTask(TaskTemplate) {
    taskList.innerHTML += TaskTemplate
}

addTaskButton.addEventListener('click', () => {
    if (taskInput.value.trim() === '') return;
    const taskText = getTaskTemplate(taskInput.value);
    addTask(taskText);
    clearTaskInput()
})

taskInput.addEventListener('keydown', (event) => {
    if(event.key !== 'Enter') return;
    if (taskInput.value.trim() === '') return;
    const taskText = getTaskTemplate(taskInput.value);
    addTask(taskText);
    clearTaskInput()
})

taskList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.className === 'delete-btn') return clickedElement.closest('.task').remove();
})