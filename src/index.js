const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".icon--menu");
const menuClose = document.querySelector(".icon--close");
const sectionsDetailImages = document.querySelectorAll(".detail__images");
const detailImage = document.querySelectorAll(".detail__image");

menuOpen.addEventListener("click", () => {
  menu.classList.add("menu--open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

sectionsDetailImages.forEach((section) => {
  const links = section.querySelectorAll(".detail__link");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (link.classList.contains("detail__link--wide")) return;
      links.forEach((l) => l.classList.toggle("detail__link--wide"));
    });
  });
});

detailImage.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("detail__image--scale");
  });
});
