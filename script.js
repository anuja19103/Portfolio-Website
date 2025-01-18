document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const section = document.querySelector(link.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
