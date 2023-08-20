const $ = document;
const navBtn = $.querySelector(".nav__btn");
const hamburger = $.querySelector(".hamburger-menu");
navBtn.addEventListener("click", e => {
    navBtn.classList.toggle("nav__btn--open");
    hamburger.classList.toggle("hamburger-menu--open");
});