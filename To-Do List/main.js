form = document.querySelector('.add-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    let deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((currentBtn) => {
        currentBtn.addEventListener('click', (event) => {
         event.target.closest('.task').remove()
        })
    })
})

document.getElementById('add-task-button').addEventListener('click', () => {
    let amountOfTasks = (document.querySelectorAll('.task')).length;
    console.log(amountOfTasks);
    if (amountOfTasks < 6 ) {
        let task = document.getElementById('input-task');
        let htmlTask = `<li class="task">
                <input type="checkbox" class="checkmark">
                <span class="task-text">${task.value}</span>
                <button class="delete-btn">x</button>
            </li>`;
        document.getElementById('task-list').innerHTML += htmlTask;
    } else {
        alert('Too many tasks!')
    }
})

