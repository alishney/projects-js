const inputElementsIdes  = ['first_name', 'last_name', 'email', 'phone', 'company', 'address'];
const form = document.querySelector(".source-form");
const currentFormInputValues = {};

let alreadyAddedSubmissions = JSON.parse(
    localStorage.getItem('submissions')
);

function generateRandomId() {
    return Math.random().toString(36).slice(2, 7);
}

function submitFormToLocalStorage() {
    if(alreadyAddedSubmissions === null) {
        alreadyAddedSubmissions = [];
    }
    alreadyAddedSubmissions.push({'id': generateRandomId(), ...currentFormInputValues});
    localStorage.setItem(
        'submissions',
        JSON.stringify(alreadyAddedSubmissions)
    );
}

function updatingForm() {
    inputElementsIdes.forEach(formInputFieldId => {
        currentFormInputValues[formInputFieldId] = document.getElementById(formInputFieldId).value;
    })
    localStorage.setItem(
        'currentFormCondition',
        JSON.stringify(currentFormInputValues)
    );
}

inputElementsIdes.forEach((inputElementId) => {
    document.getElementById(inputElementId).addEventListener('input', updatingForm)
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitFormToLocalStorage();
    form.reset();
    updatingForm();
})

window.addEventListener('storage', (event) => {
    if(event.key === 'currentFormCondition') {
        inputElementsIdes.forEach((id) => {
            const currentFormState = JSON.parse(localStorage.getItem('currentFormCondition'));
            document.getElementById(id).value = currentFormState[id];
        })
    }
});


