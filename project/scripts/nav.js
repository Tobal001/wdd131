// nav.js
document.addEventListener("DOMContentLoaded", function() {
    const mainHeader = document.querySelector(".main-header");
    const introContainer = document.querySelector(".intro-container");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const hamContainer = document.querySelector(".ham-container");
    const hamBars = document.querySelectorAll(".bar");

    // Change logo and hamburger menu color on scroll
    function handleScroll() {
        const introContainerBottom = introContainer.getBoundingClientRect().bottom;

        if (window.scrollY > introContainerBottom) {
            mainHeader.style.color = "#000";
            hamBars.forEach(bar => bar.style.backgroundColor = "#000");
            hamContainer.style.backgroundColor = "rgba(31, 31, 31, .05)";
            hamContainer.style.border = "1.5px solid rgba(31, 31, 31, 0)";
        } else {
            mainHeader.style.color = "";
            hamBars.forEach(bar => bar.style.backgroundColor = "");
            hamContainer.style.backgroundColor = "";
            hamContainer.style.border = "";
        }
    }

    window.addEventListener("scroll", handleScroll);

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});
