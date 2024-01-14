

/*** add event on element*/

const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/** navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll(".navbar-link");
const overlay = document.querySelector("[data-overlay]");
const searchIcon = document.querySelector("#search");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);
addEventOnElement(searchIcon, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElement(navbarLinks, "click", closeNav);




        
        


