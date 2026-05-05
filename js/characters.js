import { Character } from "./character.js";

export const characters = {
    "eagle-owl": new Character({
        name: "Eagle-Owl",
        affiliation: "villains",
        caseNumber: "01-Uhu",
        published: "04 May 2026",
        updated: "05 May 2026",
        lastSeen: "Wandelbos (Tilburg)",
        description: "First encountered during a nightly patrol...",
        image: "/images/eagle-owl.jpg",

        realName: "???",
        aliases: ["Eagle-Owl", "Eagle Owl", "Uhu", "The Mongol"],
        birthPlace: "Mongolia",
        birthDate: "???",
        gender: "Male",
        height: "1.78 m",
        hairColor: "Black",
        eyeColor: "Orange",
        nationality: "Mongolian",
        languages: ["Mongolian", "English"],

        weaknesses: ["Water/Rain", "Electricity"],
        crimes: [],
        threatLevel: "High",

        searchTerms: ["eagle owl", "uhu", "mongol"]
    })
};