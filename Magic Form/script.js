const ides = ['first-name', 'last-name', 'email', 'phone', 'company', 'address'];

const form = document.querySelector(".source-form")

function submissionAction() {
    let alreadyAddedSubmissions = JSON.parse(
        localStorage.getItem('submissions')
    );

    if(alreadyAddedSubmissions === null) {
        alreadyAddedSubmissions = [];
    }
    alreadyAddedSubmissions.push({
        firstname: document.getElementById('first-name').value,
        lastname: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        address: document.getElementById('address').value
    });


        localStorage.setItem(
            'submissions',
            JSON.stringify(alreadyAddedSubmissions)
        );

}

function updatingForm() {
    let currentFromCondition = JSON.parse(
        localStorage.getItem('currentFromCondition')
    );

    if(currentFromCondition === null) {
        currentFromCondition = [];
    }
    currentFromCondition.push({
        firstname: document.getElementById('first-name').value,
        lastname: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        address: document.getElementById('address').value
    });


    localStorage.setItem(
        'currentFromCondition',
        JSON.stringify(currentFromCondition)
    );
}

ides.forEach((id) => {
    document.getElementById(id).value = localStorage.getItem(id)
    document.getElementById(id).addEventListener('input', () => {
            localStorage.setItem(id, String(document.getElementById(id).value))
        }
    )
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    submissionAction();
    form.reset();

    ides.forEach((id) => {
        localStorage.setItem(id, '')
    })
})

window.onstorage = (event) => {
    if(event.key == 'submissions') {
        return;
    } else {
        ides.forEach((id) => {
                document.getElementById(id).value = localStorage.getItem(id)
        })
    }

}

