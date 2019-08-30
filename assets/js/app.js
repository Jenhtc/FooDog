// IMPORT JS

// MANAGE HAMBURGER MENU
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header"),
    iconMenu = document.querySelector("#icon-menu"),
    navMenu = document.querySelector("#nav-menu");

  const openNav = function(e) {
    header.classList.add("visible");
  };

  const closeNav = function() {
    header.classList.remove("visible");
  };

  navMenu.addEventListener("mouseleave", closeNav);

  iconMenu.addEventListener("mouseover", openNav);
});
