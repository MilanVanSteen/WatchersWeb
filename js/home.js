import { typeLines } from "./typing.js";

// Click navigation
function goToPage(page) {
    window.location.href = page + ".html";
}
window.goToPage = goToPage;

window.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const inputBox = document.getElementById("input");

    function revealButtons() {
        const buttons = document.querySelectorAll("#buttons button");

        buttons.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add("show");
            }, index * 150);
        });
    }

    typeLines({
        element: output,
        lines: [
            "Database Terminal",
            "Choose Affiliation:"
        ],
        onComplete: () => {
            revealButtons();
            inputBox.style.display = "flex";
            input.focus();
        }
    });

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = input.value.toLowerCase().trim();
            handleCommand(command);
            input.value = "";
        }
    });

    function handleCommand(command) {
        if (command === "hero") goToPage("heroes");
        else if (command === "villain") goToPage("villains");
        else if (command === "neutral") goToPage("neutral");
        else if (command === "help") {
            alert("heroes\nvillains\nneutral");
        } else {
            alert("Unknown command.");
        }
    }
});