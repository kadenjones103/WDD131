const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("hide");
    menuButton.classList.toggle("change");

    const isExpanded = !nav.classList.contains("hide");
    menuButton.setAttribute("aria-expanded", isExpanded);
});
