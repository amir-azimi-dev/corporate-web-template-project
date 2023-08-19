const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
navBtn.addEventListener("click", e => {
    navBtn.classList.toggle("nav__btn--open");
    navMenu.classList.toggle("nav-menu--open");
});