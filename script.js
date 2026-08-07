document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");

    envelope.addEventListener("click", () => {
        // Esto añade o quita la clase 'open', activando las físicas del CSS
        envelope.classList.toggle("open");
    });
});
