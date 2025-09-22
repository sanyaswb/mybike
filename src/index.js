const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".icon--menu");
const menuClose = document.querySelector(".icon--close");
const sectionsDetailImages = document.querySelectorAll(".detail__images");
const detailImage = document.querySelectorAll(".detail__image");
const navList = document.querySelector(".nav__list");
const navDropdown = document.querySelector(".dropdown");
const navDropdownLink = document.querySelectorAll(".dropdown__link");
const navDropdownItem = document.querySelectorAll(".dropdown__item");
const headerDropdownButton = document.querySelector(
  ".header__nav__link-dropdown-button--close"
);

const dropdownButton = document.getElementById("dropdownButton");
const headerNavItemDropdown = document.querySelector(
  ".header__nav__item-dropdown--close"
);
const headerNavLinkDropdown = document.querySelector(
  ".header__nav__link-dropdown--close"
);
const headerDropdown = document.querySelector(".header__dropdown--close");

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
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

const getMaxWidth = () => {
  const navListwidth = navList.clientWidth;
  return `${navListwidth}px`;
};

const dropdownMaxWidth = getMaxWidth();

navDropdown.style.maxWidth = dropdownMaxWidth;

dropdownButton.addEventListener("click", () => {
  headerNavItemDropdown.classList.toggle("header__nav__item-dropdown--open");
  headerNavLinkDropdown.classList.toggle("header__nav__link-dropdown--open");
  headerDropdown.classList.toggle("header__dropdown--open");
  headerDropdownButton.classList.toggle(
    "header__nav__link-dropdown-button--open"
  );
});

navDropdownLink.forEach((link) => {
  link.addEventListener("click", () => {
    headerNavItemDropdown.classList.toggle("header__nav__item-dropdown--open");
    headerNavLinkDropdown.classList.toggle("header__nav__link-dropdown--open");
    headerDropdown.classList.toggle("header__dropdown--open");
    headerDropdownButton.classList.toggle(
      "header__nav__link-dropdown-button--open"
    );
  });
});
