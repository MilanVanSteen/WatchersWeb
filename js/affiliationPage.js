import { characters } from "./characters.js";

function goToCharacter(id) {
    const char = characters[id];
    window.location.href = `${char.affiliation}/${id}.html`;
}
window.goToCharacter = goToCharacter;

window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("buttons");
    const backButton = document.querySelector(".show-on-load");
    if (!container) return;

    const pageType = document.body.dataset.type;

    Object.entries(characters)
        .filter(([_, char]) => char.affiliation === pageType)
        .forEach(([id, char], index) => {
            const btn = document.createElement("button");
            btn.textContent = char.name;
            btn.onclick = () => goToCharacter(id);

            container.appendChild(btn);

            setTimeout(() => {
                btn.classList.add("show");
                if (backButton) backButton.classList.add("show");
            }, index * 120);
        });
});


// typeLines({
//         element: output,
//         lines: [
//             "Watchlist",
//             "Select an entry:"
//         ],
//         onComplete: () => {
//             revealButtons();
//             inputBox.style.display = "flex";
//             input.focus();
//         }
//     });