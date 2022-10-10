"use strict";
const listWrapper = document.querySelector('.list-wrapper');
const addBtn = document.getElementById('add-task-button');
const taskInput = document.getElementById('input-task');

const actionBtnFunction = (event) => {
    const target = event.target;

    if (!(target === addBtn || target.className === 'delete-btn')) return;
    if (target.className === 'delete-btn') return target.closest('.task').remove();
    if (target === addBtn) {
        const taskHtmlTemplate = `<label class="task">
                      <input type="checkbox" class="checkmark">
                      <span class="fake-checkmark"></span>
                      <span class="task-text">${taskInput.value}</span>
                      <button class="delete-btn">x</button>
                  </label>`;

        if (taskInput.value.trim() !== '') {
            document.getElementById('task-list').innerHTML += taskHtmlTemplate;
            taskInput.value = ''
        }
    }
}

listWrapper.addEventListener('click', (event) => {
    actionBtnFunction(event)
})

document.getElementById('input-task').addEventListener('keypress', (event) => {
    if(event.key === 'Enter') return actionBtnFunction(event);
})