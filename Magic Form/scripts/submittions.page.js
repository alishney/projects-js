const submissions = getSubmissionsFromLocalStorage();

function getSubmissionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('submissions'));
}

function createSubmissionsCards() {
    submissions.forEach((submissionObject) => {
        let htmlBlock = `<div class="submit-history-card">
                       <div class="fields-grid">
                         <p class="lable"><b>First Name</b></p>
                         <p class="card-first-name value">${submissionObject.first_name}</p>
                         <p class="lable"><b>Last Name</b></p>
                         <p class="card-last-name value">${submissionObject.last_name}</p>
                         <p class="lable"><b>Email</b></p>
                         <p class="card-email value">${submissionObject.email}</p>
                         <p class="lable"><b>Phone</b></p>
                         <p class="card-phone value">${submissionObject.phone}</p>
                         <p class="lable"><b>Company</b></p>
                         <p class="card-company value">${submissionObject.company}</p>
                         <p class="lable"><b>Adress</b></p>
                         <p class="card-address value">${submissionObject.address}</p>
                       </div>
                       <button class="delete-button">Delete</button>
                   </div>`;

        document.querySelector('.container').innerHTML += htmlBlock;
    });
}

function createDeletingButtons() {
    let buttons = document.querySelectorAll('.delete-button');
    submissions.forEach((submissionObject, item) => {
        buttons[item].addEventListener('click', (e) => {
            let filteredSubmissions = submissions.filter(currentSubmission => currentSubmission.id !== submissionObject.id);
            e.target.closest('.submit-history-card').remove();
            localStorage.setItem(
                'submissions',
                JSON.stringify(filteredSubmissions)
            );
            window.location.reload();
        })
    });
}

(function showSubmissionsCards() {
    if(submissions === null) {
        return;
    }

    createSubmissionsCards();
    createDeletingButtons();
}());
