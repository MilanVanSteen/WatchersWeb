export class Character {
    constructor({name, affiliation, caseNumber, published, updated, lastSeen, description, image, realName, aliases = [], birthDate, birthPlace, gender, height, hairColor, eyeColor, nationality, languages = [], weaknesses = [], crimes = [], threatLevel, searchTerms = []}) 
    {
        this.name = name;
        this.affiliation = affiliation;
        this.caseNumber = caseNumber;
        this.published = published;
        this.updated = updated;
        this.lastSeen = lastSeen;
        this.description = description;
        this.image = image;
        this.realName = realName;
        this.aliases = aliases;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.gender = gender;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.nationality = nationality;
        this.languages = languages;
        this.weaknesses = weaknesses;
        this.crimes = crimes;
        this.threatLevel = threatLevel;
        this.searchTerms = searchTerms;
    }

    getLines() {
        return [
            { type: "title", text: this.name },

            { type: "space" },
            { type: "field", text: `Case number: ${this.caseNumber}` },
            { type: "space" },
            { type: "field", text: `Published on: ${this.published}` },
            { type: "space" },
            { type: "field", text: `Last update: ${this.updated}` },
            { type: "space" },
            { type: "field", text: `Last seen in: ${this.lastSeen}` },
            { type: "space" },
            { type: "space" },
            { type: "space" },
            { type: "text", text: this.description },
            { type: "space" },
            { type: "space" },
            { type: "space" },
            { type: "section", text: "Signalement:" },
            { type: "space" },
            { type: "field", text: `- Real name: ${this.realName}` },
            { type: "field", text: `- Other aliases: ${this.aliases.join(", ")}` },
            { type: "field", text: `- Date of birth: ${this.birthDate}` },
            { type: "field", text: `- Place of birth: ${this.birthPlace}` },
            { type: "field", text: `- Gender: ${this.gender}` },
            { type: "field", text: `- Height: ${this.height}` },
            { type: "field", text: `- Hair color: ${this.hairColor}` },
            { type: "field", text: `- Eye color: ${this.eyeColor}` },
            { type: "field", text: `- Nationality: ${this.nationality}` },
            { type: "field", text: `- Speaks: ${this.languages.join(", ")}` },
            { type: "space" },
            { type: "space" },
            { type: "space" },
            { type: "section", text: "Specific Weaknesses:" },
            ...this.weaknesses.map(w => ({ type: "bullet", text: w })),
            { type: "space" },
            { type: "space" },
            { type: "space" },
            { type: "section", text: "Committed Crimes:" },
            ...this.crimes.map(c => ({ type: "bullet", text: c })),
            { type: "space" },
            { type: "space" },
            { type: "space" },
            { type: "threat", text: this.threatLevel }
        ];
    }
}