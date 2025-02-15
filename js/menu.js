document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".apihu-port-mobile-menu");
    const menuLinks = document.querySelectorAll(".apihu-port-mobile-menu a");

    // Toggle menu when clicking the menu button
    menuButton.addEventListener("click", function () {
        this.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking a menu item
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuButton.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });
});
