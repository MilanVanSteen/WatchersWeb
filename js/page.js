import { typeLines } from "./typing.js";
import { characters } from "./characters.js";

const path = window.location.pathname;
const pageKey = path.split("/").pop().replace(".html", "");

const character = characters[pageKey];

window.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const imageContainer = document.getElementById("imageContainer");
    const backButton = document.querySelector(".show-on-load");

    if (!character) {
        output.textContent = "Character not found.";
        return;
    }

    // IMAGE
    const img = document.createElement("img");
    img.src = character.image;
    img.className = "character-image";

    imageContainer.appendChild(img);

    // trigger animation immediately or delayed
    setTimeout(() => {
        img.classList.add("show");
    }, 300);

    // TEXT
    typeLines({
        element: output,
        lines: character.getLines(),
        lineDelay: 500,
        onComplete: () => {
            if (backButton) backButton.classList.add("show");
        }
    });
});