// Hamburger Toggle
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent =
        menuButton.textContent.trim() === "☰" ? "✖" : "☰";
});

// Dynamic dates for footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
