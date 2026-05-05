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
            "Buzzard",
            "Published on: 00-00-0000",
            "Last update: 00-00-0000",
            "Case number: 03-Buzz",
            "Last seen in: Tilburg",
            " ",
            "\"...\"",
            " ",
            "__HTML__<img src='/images/eagle-owl.jpg' class='character-image scan-reveal'>",
            "Signalement:",
            "- Name: Buzz",
            "- Date of Birth: ???",
            "- Place of Birth: ???",
            "- Gender: Male",
            "- Estimated Length: ... m",
            "- Hair Color: Brown",
            "- Eye Color: Brown",
            "- Nationality: Dutch",
            "- Speaks: Dutch, English",
        ],
    },
    "eagle-owl": {
        lines: [
            "Eagle-Owl",
            "Case number: 01-Uhu",
            "Published on: 04 May 2026",
            "Last update: 05 May 2026",
            "Last seen in: Wandelbos (Tilburg)",
            " ",
            "First encountered during a nightly patrol, fired arrows at and gave chase to Mystery. Only seems to 'hunt' lone targets. Hunts with an Eurasian Eagle-Owl, presumably owned by him. Seems to have a particular grudge and hatred for Mystery specifically.",
            " ",
            "__HTML__<img src='/images/eagle-owl.jpg' class='character-image scan-reveal'>",
            "Signalement:",
            "- Real name: ???",
            "- Other aliases: Uhu, the Mongol",
            "- Date of birth: ???",
            "- Place of birth: Mongolia",
            "- Gender: Male",
            "- Height: 1,78 m. (5'10)",
            "- Hair color: Black",
            "- Eye color: Orange",
            "- Nationality: Mongolian",
            "- Speaks: Mongolian, English (limited)",
            " ",
            "Specific Weaknesses:",
            "- Water/Rain (>)",
            "- Electricity (>)",
            " ",
            " Commited Crimes: (>)",
            " ",
            " ",
            " ",
            "Threat level: High",
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
            "Goshawk",
            "Published on: 00-00-0000",
            "Last update: 00-00-0000",
            "Case number: 02-Gos",
            "Last seen in: Tilburg",
            " ",
            "\"Agile, fast, feminine, the Goshawk is a formidable foe. Wielding a naginata and moving gracefully, she strikes those who seek to commit harm upon the innocent, mercilessly. After all, they had it coming if you asked her. She will do whatever it takes to protect her people, so be warned.\"",
            " ",
            "__HTML__<img src='/images/eagle-owl.jpg' class='character-image scan-reveal'>",
            "Signalement:",
            "- Name: Suki Otaka",
            "- Date of Birth: ???",
            "- Place of Birth: Japan",
            "- Gender: Female",
            "- Estimated Length: ... m",
            "- Hair Color: Dark grey",
            "- Eye Color: Hazel",
            "- Nationality: Japanese",
            "- Speaks: Japanese, English"
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