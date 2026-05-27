const heroButton = document.querySelector(".hero-btn");

heroButton.addEventListener("click", function(event) {

    event.preventDefault();

    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });

});

/* Active Navbar Highlight */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});

/* Small Entrance Animation */

const cards = document.querySelectorAll(
    ".project-card, .skill-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => {

    observer.observe(card);

});