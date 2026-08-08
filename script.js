document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");

    cardContainer.addEventListener("click", () => {
        cardContainer.classList.toggle("open");
    });
});
