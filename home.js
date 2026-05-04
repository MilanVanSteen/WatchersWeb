const input = document.getElementById("commandInput");

function goToPage(page) {
    window.location.href = page + ".html";
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        const command = input.value.toLowerCase().trim();

        handleCommand(command);

        input.value = "";
    }
});

function handleCommand(command) {

    if (command === "hero") {
        goToPage("heroes");
    }

    else if (command === "villain") {
        goToPage("villains");
    }

    else if (command === "neutral") {
        goToPage("neutral");
    }

    else if (command === "help") {
        alert(
            "Commands:\n" +
            "heroes\n" +
            "villains\n" +
            "neutral"
        );
    }

    else {
        alert("Unknown command.");
    }

}