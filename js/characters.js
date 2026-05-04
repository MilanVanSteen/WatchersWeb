import { typeLines } from "./typing.js";

// Click navigation
function goToCharacter(affiliation, characterId) {
    window.location.href = affiliation + '/' + characterId + ".html";
}
window.goToCharacter = goToCharacter;

window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const inputBox = document.querySelector(".command-line");

    const data = {
        heroes: [
            {
                id: "mystery",
                aliases: ["Mystery", "Mr. E", "Mr E"]
            },
            {
                id: "monkey-man",
                aliases: ["Monkey-Man", "Monkey Man", "MonkeyMan", "Monke Man", "MonkeMan", "Monke", "Monkey"]
            }
        ],
        villains: [
            {
                id: "eagle-owl",
                aliases: ["Eagle-Owl", "Eagle Owl", "Uhu", "The Mongol"]
            },
            {
                id: "goshawk",
                aliases: ["Goshawk", "Goose-Hawk", "Goose Hawk", "Suki Ōtaka", "Suki Otaka", "Suki", "Ōtaka", "Otaka"]
            },
            {
                id: "buzzard",
                aliases: ["Buzzard", "Buzz"]
            },
            {
                id: "swooper",
                aliases: ["Swooper", "Frank", "Gus Meeuwen", "Gus", "Meeuwen", "Guus Meeuwis"]
            },
            {
                id: "golden-eagle",
                aliases: ["Golden Eagle", "The Eagle", "American Idiot"]
            },
            {
                id: "berserker",
                aliases: ["Berserker"]
            },
            {
                id: "bulldozer",
                aliases: ["Bulldozer"]
            },
            {
                id: "lightshow",
                aliases: ["Lightshow", "Lucian Light", "Lucian", "Light"]
            },
            {
                id: "thundershark",
                aliases: ["Thundershark", "The Shark", "Shark"]
            },
            {
                id: "hivemind",
                aliases: ["Hivemind", "William Wasp", "William", "Wasp"]
            },
            {
                id: "buzzard",
                aliases: ["Buzzard", "Buzz"]
            },
            {
                id: "lollipop",
                aliases: ["Lollipop", "Milly", "Gimmick", "Silly Milly"]
            },
            {
                id: "reticulatus",
                aliases: ["Reticulatus", "Retickle Anus"]
            },
            {
                id: "harpy",
                aliases: ["Harpy"]
            },
            {
                id: "the-tiger",
                aliases: ["The Tiger", "Tiger", "El Tigre"]
            },
            {
                id: "leopard",
                aliases: ["Leopard", "The Leopard"]
            },
            {
                id: "leo",
                aliases: ["Leo", "The Lion", "Lion", "King of the Jungle"]
            },
            {
                id: "hunter",
                aliases: ["Hunter", "The Hunter", "Aura Personified"]
            },
        ]
    };

    const pageType = document.body.dataset.type;
    const list = data[pageType] || [];

    function normalize(str) {
        return str.toLowerCase().trim().replace(/[\s_-]+/g, ""); // collapse ALL spaces/dashes/underscores
    }

    function findMatch(input) {
        const normalizedInput = normalize(input);

        for (const character of list) {
            for (const alias of character.aliases) {
                if (normalize(alias) === normalizedInput) {
                    return character.id;
                }
            }
        }
        return null;
    }

    function handleCommand(command) {
        const match = findMatch(command);

        if (match) 
        {
            goToCharacter(pageType, match);
        }
        else if (command === "back") {
            window.location.href = "home.html";
        }
        else if (command === "help") {
            alert(
                "Commands:\n\n" +
                "[character name]\n" +
                "back\n" +
                "help"
            );
        }
        else {
            alert("Unknown command.");
        }
    }

    // Input
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = input.value.toLowerCase().trim();
            handleCommand(command);
            input.value = "";
        }
    });

    function revealButtons() {
        const mainButtons = document.querySelectorAll(".characters button");
        const backButton = document.querySelector(".show-on-load");

        mainButtons.forEach((btn, i) => {
            setTimeout(() => btn.classList.add("show"), i * 150);
        });

        setTimeout(() => {
            if (backButton) backButton.classList.add("show");
        }, mainButtons.length * 150 + 200);
    }

    typeLines({
        element: output,
        lines: [
            "Watchlist",
            "Select an entry:"
        ],
        onComplete: () => {
            revealButtons();
            inputBox.style.display = "flex";
            input.focus();
        }
    });
});