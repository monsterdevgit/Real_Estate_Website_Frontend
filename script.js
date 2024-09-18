"use strict";

// navbar toggle in mobile
const /**{NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /**{NodeElement} */ $navToggler =
    document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

// HEADER SCROLL STATE
const /**{NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// ADD TO FAVORITE BUTTON TOGGLE

const /**{NodeList}*/ $toggleBtns =
    document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});
