// DOM Basics

let age = 21;
let name = "Kaden Jones";

// This is like print in Python
console.log(age);
console.log(name);

// This is a constant variable
const eyeColor = "blue";

console.log(eyeColor);

// Get the dropdown element
let selectElem = document.getElementById("webdevlist");

// Listen for a change in the dropdown
selectElem.addEventListener("change", function() {

    // Get the value selected from the dropdown
    let codeValue = selectElem.value;

    console.log(codeValue);

    // If HTML is selected
    if (codeValue === "html") {
        document.querySelector("h1").textContent = "HyperText Markup Language";
        document.querySelector("p").textContent = "HTML defines the structure and content of a web page.";
        document.querySelector("h1").style.color = "red";
    }

    // If CSS is selected
    else if (codeValue === "css") {
        document.querySelector("h1").textContent = "Cascading Style Sheets";
        document.querySelector("p").textContent = "CSS controls how the HTML elements look.";
        document.querySelector("h1").style.color = "blue";
    }

    // If JavaScript is selected
    else if (codeValue === "js") {
        document.querySelector("h1").textContent = "JavaScript";
        document.querySelector("p").textContent = "JavaScript adds interactivity and dynamic behavior.";
        document.querySelector("h1").style.color = "goldenrod";
    }
});