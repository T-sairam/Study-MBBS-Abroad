// js/script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully 🚀");

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("a.scroll-link").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Dynamic Hero Animation
    const heroText = document.querySelector(".hero-title");
    if (heroText) {
        heroText.classList.add("slide-in");
    }
});
