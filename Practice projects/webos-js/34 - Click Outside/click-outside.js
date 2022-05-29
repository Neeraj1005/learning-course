const cardButtons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleCardButtonClick(event)
{
    const button = event.currentTarget;
    const card = button.closest(".card");

    //Grab the img src
    // const imgSrc = card.querySelector("img").src;
    const desc = card.dataset.description;
    const name = card.querySelector("h2").textContent;

    modalInner.innerHTML = `
    <h3>${name}</h3>
    <p>${desc}</p>
    `
    modalOuter.classList.add("open");
}

cardButtons.forEach((button) => {
    button.addEventListener('click', handleCardButtonClick);
});

function closeModal() {
    modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal-inner");
    if (isOutside) {
      closeModal();
    }
});

window.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key === "Escape") {
      closeModal();
    }
});