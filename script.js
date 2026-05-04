import { typeLines } from "./typing.js";

window.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typingText");

    typeLines({
        element: typingElement,
        lines: [
            "Loading system...",
            "Accessing Watchlist...",
            "Initializing data...",
            "Ready."
        ],
        onComplete: () => {
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
        }
    });
});