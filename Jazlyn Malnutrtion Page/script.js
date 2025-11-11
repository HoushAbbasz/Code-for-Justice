// Accordion toggle
document.querySelectorAll(".acc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";

        document.querySelectorAll(".acc-btn").forEach(other => {
            other.setAttribute("aria-expanded", "false");
            other.nextElementSibling.hidden = true;
        });

        if (!expanded) {
            btn.setAttribute("aria-expanded", "true");
            btn.nextElementSibling.hidden = false;
        }
    });
});

// BACK TO TOP BUTTON LOGIC

const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
