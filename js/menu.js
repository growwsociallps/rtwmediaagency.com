document.querySelector(".menu-button").addEventListener("click", function() {
        this.classList.toggle("active");
        document.querySelector(".apihu-port-mobile-menu").classList.toggle("active");
    });

    document.querySelector(".apihu-port-menu-close").addEventListener("click", function() {
        document.querySelector(".menu-button").classList.remove("active");
        document.querySelector(".apihu-port-mobile-menu").classList.remove("active");
    });
