export function typeLines({
    element,
    lines,
    typingSpeed = 40, // lower = faster
    lineDelay = 600,
    onComplete = null
}) {
    let lineIndex = 0;
    let charIndex = 0;

    function type() 
    {
        if (!element) return;

        if (lineIndex < lines.length) 
        {
            const currentLine = lines[lineIndex];

            if (currentLine.startsWith("__HTML__")) {
                const html = currentLine.replace("__HTML__", "");

                const wrapper = document.createElement("div");
                wrapper.innerHTML = html;

                const img = wrapper.querySelector(".scan-reveal");

                element.appendChild(wrapper);
                element.appendChild(document.createElement("br"));

                if (img) {
                    img.classList.remove("show");

                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            img.classList.add("show");
                        });
                    });
                }

                lineIndex++;
                charIndex = 0;
                setTimeout(type, lineDelay);
                return;
            }

            if (charIndex < lines[lineIndex].length) {
                element.appendChild(document.createTextNode(lines[lineIndex][charIndex]));
                charIndex++;
                setTimeout(type, typingSpeed);
            } 
            else {
                element.appendChild(document.createElement("br"));
                lineIndex++;
                charIndex = 0;
                setTimeout(type, lineDelay);
            }

        } 
        else {
            if (onComplete) onComplete();
        }
    }

    type();
}