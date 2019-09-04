// IMPORT JS

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector("body").getAttribute("id") === "singlePage") {
    // MANAGE HAMBURGER MENU
    const header = document.querySelector("header"),
      iconMenu = document.querySelector("#icon-menu"),
      navMenu = document.querySelector("#nav-menu");

    const openNav = function(e) {
      header.classList.add("visible");
    };

    const closeNav = function() {
      header.classList.remove("visible");
    };

    // navMenu.addEventListener("mouseleave", closeNav);

    iconMenu.addEventListener("click", function() {
      if (header.classList.contains("visible")) closeNav();
      else openNav();
    });
  }

  // SEARCH BOX

  const searchBox = document.querySelector("#search");
  if (searchBox) {
    const icon = searchBox.querySelector(".icon");

    icon.addEventListener("click", function(e) {
      if (icon.classList.contains("visible")) icon.classList.remove("visible");
      else icon.classList.add("visible");
    });
  }
});
