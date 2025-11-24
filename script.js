

const texts = [
    "Problem Solver |",
    "Web Developer |",
    "Python Full-Stack Developer |",
    "React Enthusiast |"
];

let index = 0;      // which text
let charIndex = 0;  // which character
let isDeleting = false;
const speed = 100;       // typing speed
const deleteSpeed = 50;  // deleting speed
const delay = 1000;      // wait time before deleting

function typeEffect() {
    let currentText = texts[index];
    let displayText = currentText.substring(0, charIndex);
    document.getElementById("typingText").innerHTML = displayText;

    if (!isDeleting) {
        // typing
        if (charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeEffect, speed);
        } else {
            // text fully typed → wait → delete
            isDeleting = true;
            setTimeout(typeEffect, delay);
        }
    } else {
        // deleting
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, deleteSpeed);
        } else {
            // move to next text
            isDeleting = false;
            index = (index + 1) % texts.length;
            setTimeout(typeEffect, 300);
        }
    }
}

typeEffect();