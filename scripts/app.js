const $ = document;
const navBtn = $.querySelector(".nav__btn");
const hamburger = $.querySelector(".hamburger-menu");
const imgs = $.querySelectorAll("img");

navBtn.addEventListener("click", e => {
    navBtn.classList.toggle("nav__btn--open");
    hamburger.classList.toggle("hamburger-menu--open");
});

imgs.forEach(img => {
    img.setAttribute("loading", "lazy");
});

window.scrollTo({
    top: window.scrollY,
    left: 0,
    behavior: "smooth"
});