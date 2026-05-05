export class Character {
    constructor({name, caseNumber, published, updated, lastSeen, description, image, realName, aliases = [], birthPlace, birthDate, gender, height, hairColor, eyeColor, nationality, languages = [], weaknesses = [], crimes = [], threatLevel, searchTerms = []}) 
    {
        this.name = name;
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
            this.name,
            `Case number: ${this.caseNumber}`,
            `Published on: ${this.published}`,
            `Last update: ${this.updated}`,
            `Last seen in: ${this.lastSeen}`,
            " ",
            this.description,
            " ",
            `__HTML__<img src='${this.image}' class='character-image scan-reveal'>`,
            "Signalement:",
            `- Real name: ${this.realName}`,
            `- Other aliases: ${this.aliases.join(", ")}`,
            `- Date of birth: ${this.birthDate}`,
            `- Place of birth: ${this.birthPlace}`,
            `- Gender: ${this.gender}`,
            `- Height: ${this.height}`,
            `- Hair color: ${this.hairColor}`,
            `- Eye color: ${this.eyeColor}`,
            `- Nationality: ${this.nationality}`,
            `- Speaks: ${this.languages.join(", ")}`,
            " ",
            "Specific Weaknesses:",
            ...this.weaknesses.map(w => `- ${w}`),
            " ",
            "Committed Crimes:",
            ...this.crimes.map(c => `- ${c}`),
            " ",
            `Threat level: ${this.threatLevel}`
        ];
    }
}