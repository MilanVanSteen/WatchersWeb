export function typeLines({
    element,
    lines,
    typingSpeed = 40, // lower = faster
    lineDelay = 600,
    onComplete = null
}) {
    let lineIndex = 0;
    let charIndex = 0;

    function type() {
        if (!element) return;

        if (lineIndex < lines.length) {

            if (charIndex < lines[lineIndex].length) {
                element.innerHTML += lines[lineIndex][charIndex];
                charIndex++;
                setTimeout(type, typingSpeed);
            } 
            else {
                element.innerHTML += "<br>";
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