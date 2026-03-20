/* ===== MOBILE NAV ===== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ===== THEME TOGGLE ===== */
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggle.textContent = "🌞";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    toggle.textContent = isLight ? "🌞" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ===== SCROLL PROGRESS BAR ===== */
const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + "%";
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const trigger = window.innerHeight - 100;
    reveals.forEach(section => {
        if (section.getBoundingClientRect().top < trigger) {
            section.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===== TYPING ANIMATION ===== */
const phrases = [
    "Web Developer",
    "Prompt Engineer",
    "Python Enthusiast",
    "Problem Solver"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typingText");

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 1800; // pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400; // pause before next phrase
    }

    setTimeout(type, delay);
}

// Start after a short initial delay
setTimeout(type, 600);
