import { typeLines } from "./typing.js";

// page configs (you can expand this later)
const pageData = {
    mystery: {
        lines: [
            "> Mystery",
            "\"Despite everything, I’m still here…\""
        ],
    },
    "monkey-man": {
        lines: [
            "> Monkey-Man",
            "\"Missed me!\""
        ],
    },
    berserker: {
        lines: [
            "> Berserker",
            "\"...\""
        ],
    },
    bulldozer: {
        lines: [
            "> Bulldozer",
            "\"...\""
        ],
    },
    buzzard: {
        lines: [
            "> Buzzard",
            "\"Somewhat broadly built guy, who frequently buds heads with Mystery.\""
        ],
    },
    "eagle-owl": {
        lines: [
            "[Eagle-Owl]",
            "Published on: 00-00-0000",
            "Last update: 00-00-0000",
            "Case number: 00-xxx",
            "Last seen in: [location]",
            " ",
            "\"A silent hunter, the Eagle-Owl stalks his ‘prey’ in the night, usually when they’re alone, and appearing out of nowhere. He wields a bow, sword and sharp talons on his gloves, always accompanied by his owl.\"",
            " ",
            "__HTML__<img src='/images/eagle-owl.jpg' class='character-image scan-reveal'>",
            "Signalment:",
            "- Name: Unknown",
            "- Date of Birth: 00-00-0000",
            "- Place of Birth: Unknown",
            "- Gender: Male",
            "- Estimated Length: ... m",
            "- Hair Color: Black",
            "- Eye Color: Orange",
            "- Nationality: Mongolian",
            "- Speaks: Mongolian",
            " "
        ],
    },
    "golden-eagle": {
        lines: [
            "> Golden Eagle",
            "\"WHAT THE FUCK IS A KILOMETER RAHHHHHHH!!!\""
        ],
    },
    goshawk: {
        lines: [
            "> Goshawk",
            "\"Agile, fast, feminine, the Goshawk is a formidable foe. Wielding a naginata and moving gracefully, she strikes those who seek to commit harm upon the innocent, mercilessly. After all, they had it coming if you asked her. She will do whatever it takes to protect her people, so be warned.\""
        ],
    },
    harpy: {
        lines: [
            "> Harpy",
            "\"...\""
        ],
    },
    hivemind: {
        lines: [
            "> Hivemind",
            "\"Annoying little brat, that claims to be Milan’s rival.\""
        ],
    },
    hunter: {
        lines: [
            "> Hunter",
            "\"The goat, the legend.\""
        ],
    },
    leo: {
        lines: [
            "> Leo",
            "\"...\""
        ],
    },
    leopard: {
        lines: [
            "> Leopard",
            "\"...\""
        ],
    },
    lightshow: {
        lines: [
            "> Lightshow",
            "\"Likes to steal the spotlight, figuratively and literally.\""
        ],
    },
    lollipop: {
        lines: [
            "> Lollipop",
            "\"She is a little crazy if you ask me, definitely not a good influence…\""
        ],
    },
    reticulatus: {
        lines: [
            "> Reticulatus",
            "\"...\""
        ],
    },
    swooper: {
        lines: [
            "> Swooper",
            "\"Loud, obnoxious and annoying thief who would steal candy from a baby. Can’t stand this guy.\""
        ],
    },
    "the-tiger": {
        lines: [
            "> The Tiger",
            "\"...\""
        ],
    },
    thundershark: {
        lines: [
            "> Thundershark",
            "\"Might be the weirdest yet coolest foe we’ve faced.\""
        ],
    },
};

// detect which page we are on
const path = window.location.pathname;
const pageKey = path.split("/").pop().replace(".html", "");

const config = pageData[pageKey];

window.addEventListener("DOMContentLoaded", () => {

    const output = document.getElementById("output");
    const backButton = document.querySelector(".show-on-load");

    if (!config) return;

    typeLines({
        element: output,
        lines: config.lines,
        lineDelay: 500,
        onComplete: () => {

            // reveal back button
            if (backButton) {
                backButton.classList.add("show");
            }
        }
    });

});