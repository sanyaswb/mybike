const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".icon--menu");
const menuClose = document.querySelector(".icon--close");

menuOpen.addEventListener("click", () => {
  menu.classList.add("menu--open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});
