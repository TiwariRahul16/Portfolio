// toggling the button in navbar
function toggleMenu() {
    const menu = document.querySelector(".nav_link");
    menu.classList.toggle("active");
}


const words = ["Learner", "Developer", "Simple Coder", "MERN Stack Developer","Open Source Contributor"];
const textElement = document.getElementById("text");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentWord.length) {
        typingSpeed = 2000; // Pause after full word
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// const words = ["Learner", "Developer", "Simple Coder", "MERN Stack Developer", "Open Source Contributor"];
// let i = 0, j = 0, del = false;
// const textElement = document.getElementById("text");

// function typeEffect() {
//     textElement.textContent = words[i].slice(0, j += del ? -1 : 1);
    
//     let speed = del ? 100 : 150; // Slower typing, moderate deleting

//     if (j === words[i].length) {
//         del = true;
//         speed = 2000; // Pause after full word
//     } else if (j === 0) {
//         del = false;
//         i = (i + 1) % words.length;
//     }

//     setTimeout(typeEffect, speed);
// }

// typeEffect();



