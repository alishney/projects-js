"use strict";

const container = document.querySelector(".container-with-users");
const searchInput = document.querySelector(".search-input");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".close-modal-btn");

function renderUsers(users) {
    container.innerHTML = "";
    users.forEach((userObject) => {
        let htmlUserTemplate = `<div class="user-card" data-user='${JSON.stringify(
            userObject
        )}'>
            <div class="user-full-name">${userObject.name}</div>
            <div class="user-phone-number">${userObject.phone}</div>
            <div class="user-email">${userObject.email}</div>
        </div>`;
        container.innerHTML += htmlUserTemplate;
    });
}

function update() {
    fetch(`./src/data.json`).then((response => {
        return response.json();
        }))
        .then((users) => {
            const searchingResult = users.filter((usersFilteredByName) => usersFilteredByName.name.toLowerCase().includes(searchInput.value.toLowerCase()));
            renderUsers(searchingResult);
        });
}

function showModal() {
    modalOverlay.style.display = "block";
}

function hideModal() {
    modalOverlay.style.display = "none";
}

searchInput.addEventListener("input", update);

modalOverlay.addEventListener("click", (e) => {
    if (e.currentTarget === modalOverlay) {
        hideModal();
    }
});

modalCloseBtn.addEventListener("click", hideModal);

container.addEventListener("click", (event) => {
    const clickedUserCard = event.target.closest(".user-card");

    if (!clickedUserCard) return;

    const clickedUserCardData = JSON.parse(clickedUserCard.dataset.user);
    console.log(clickedUserCardData);
    for (const field in clickedUserCardData) {
        const htmlField = modalOverlay.querySelector(`#modal-field-${field}`);
        if (htmlField) {
            htmlField.innerHTML = clickedUserCardData[field];
        }
    }

    showModal();
});

update();
