/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

    });


    /* Close menu when clicking a link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "Creative Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    /* Stop if typing element doesn't exist */
    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

if (typingText) {
    typeEffect();
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .hero-content"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


/* =========================================
   3D MOUSE EFFECT
========================================= */

const profileCard =
    document.querySelector(".profile-card");

const hero =
    document.querySelector(".hero");


if (profileCard && hero) {

    hero.addEventListener("mousemove", (event) => {

        /* Disable 3D effect on mobile/tablet */

        if (window.innerWidth < 900) {
            return;
        }

        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            (y - centerY) / 35;

        const rotateY =
            (centerX - x) / 35;

        profileCard.style.transform =
            `rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    hero.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "rotateX(0deg) rotateY(0deg) translateY(0)";

    });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        contactForm.reset();

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const year = new Date().getFullYear();

console.log(
    `Portfolio loaded successfully - ${year}`
);