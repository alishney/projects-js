const listWrapper = document.querySelector('.list-wrapper');
const addBtn = document.getElementById('add-task-button');

const actionBtnFunction = (event) => {
    const target = event.target;
    if (!((target == addBtn) || (target.className == 'delete-btn'))) return;

    if (target == addBtn) {
        const newTask = document.getElementById('input-task');
        const htmlTask = `<label class="task">
                      <input type="checkbox" class="checkmark">
                      <span class="fake-checkmark"></span>
                      <span class="task-text">${newTask.value}</span>
                      <button class="delete-btn">x</button>
                  </label>`;

        if (newTask.value.trim() !== '') {
            document.getElementById('task-list').innerHTML += htmlTask;
            newTask.value = ''
        }
        return;
    }

    if (target.className == 'delete-btn') return target.closest('.task').remove();
}

listWrapper.addEventListener('click', (event) => {
    actionBtnFunction(event)
})

listWrapper.addEventListener('keypress', (event) => {
    if(event.key = 'Enter') return actionBtnFunction(event);
})