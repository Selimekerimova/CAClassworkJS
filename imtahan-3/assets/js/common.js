const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".fa-solid");
// icon click
menuIcon.addEventListener("click", function () {
    nav.classList.toggle("responsive");
    menuIcon.classList.toggle("fa-xmark");
  });