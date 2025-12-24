/* Mobile Navigation */
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

/* Theme Toggle */
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


/* Scroll Reveal */
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
