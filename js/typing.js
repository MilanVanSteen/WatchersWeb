export function typeLines({
    element,
    lines,
    typingSpeed = 40, // lower = faster
    lineDelay = 400,
    onComplete = null
}) {
    let index = 0;

    function next() {
        index++;

        if (index >= lines.length) {
            if (onComplete) onComplete();
            return;
        }

        setTimeout(() => render(lines[index]), lineDelay);
    }
    
    function render(line) {
        const el = document.createElement("div");
        element.appendChild(el);

        switch (line.type) {

            case "title":
                el.classList.add("line-title");
                typeText(el, line.text, next);
                break;

            case "section":
                el.classList.add("line-section");
                typeText(el, line.text, next);
                break;
            
            case "threat": {
                const el = document.createElement("div");
                el.classList.add("line-field");

                const level = line.text.toLowerCase();

                let color = "white";

                if (level === "high") color = "red";
                else if (level === "medium") color = "yellow";
                else if (level === "low") color = "green";

                el.innerHTML = `<b>Threat level:</b> <span class="threat ${level}">${line.text}</span>`;

                element.appendChild(el);
                next();
                break;

                // make it type out, also make page automatically go down with new lines?, and sound obv
            }

            case "field":
                el.classList.add("line-field");
                typeText(el, line.text, next);
                break;

            case "bullet":
                el.classList.add("line-bullet");
                typeText(el, `- ${line.text}`, next);
                break;

            case "text":
                el.classList.add("line-text");
                typeText(el, line.text, next);
                break;

            case "space":
                el.style.height = "22px";
                next();
                break;
        }
    }

    function typeText(el, text, done) {
        let i = 0;

        function step() {
            if (i < text.length) {
                el.innerHTML += text[i++];
                setTimeout(step, typingSpeed);
            } else {
                done();
            }
        }

        step();
    }

    if (lines.length) render(lines[index]);
}