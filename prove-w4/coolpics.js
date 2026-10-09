
const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

const galleryImages = document.querySelectorAll(".gallery img");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const closeModal = document.querySelector("#closeModal");

// Open and close the responsive menu
menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("hide");

    const isOpen = !mainNav.classList.contains("hide");

    menuButton.setAttribute("aria-expanded", isOpen);
});

// Open the modal when an image is clicked
galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        modalImage.src =
            "https://wddbyui.github.io/wdd131/images/norris-full.jpg";

        modalImage.alt = image.alt;

        imageModal.showModal();
    });
});

// Close the modal with the X button
closeModal.addEventListener("click", () => {
    imageModal.close();
});

// Clear the image when the modal closes, including with Escape
imageModal.addEventListener("close", () => {
    modalImage.src = "";
});

// Close the modal when clicking outside the image
imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        imageModal.close();
    }
});