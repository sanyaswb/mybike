const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");
const menuOpen = document.querySelector(".icon--menu");
const menuClose = document.querySelector(".icon--close");
const detailImages = document.querySelectorAll(".detail__images");
const detailImage = document.querySelectorAll(".detail__image");

const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const compareItem = document.getElementById("compareItem");
const compareNavLink = document.getElementById("compareNavLink");
const compareDropdownButton = document.getElementById("compareDropdownButton");
const compareDropdown = document.getElementById("compareDropdown");
const compareDropdownLinks = document.querySelectorAll(
  ".dropdown__compare__link"
);

const detailsItem = document.getElementById("detailsItem");
const detailsNavLink = document.getElementById("detailsNavLink");
const detailsDropdownButton = document.getElementById("detailsDropdownButton");
const detailsDropdown = document.getElementById("detailsDropdown");
const detailsDropdownLinks = document.querySelectorAll(
  ".dropdown__details__link"
);

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

detailImages.forEach((section) => {
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
  const navListWidth = navList.clientWidth;
  return `${navListWidth}px`;
};
const dropdownMaxWidth = getMaxWidth();
dropdown.style.maxWidth = dropdownMaxWidth;

compareDropdownButton.addEventListener("click", () => {
  compareDropdownButton.classList.toggle(
    "header__nav__link-dropdown-button--open"
  );
  compareItem.classList.toggle("header__nav__item-dropdown--open");
  compareNavLink.classList.toggle("header__nav__link-dropdown--open");
  compareDropdown.classList.toggle("header__dropdown--open");
  detailsDropdownButton.classList.remove(
    "header__nav__link-dropdown-button--open"
  );
  detailsItem.classList.remove("header__nav__item-dropdown--open");
  detailsNavLink.classList.remove("header__nav__link-dropdown--open");
  detailsDropdown.classList.remove("header__dropdown--open");
});

detailsDropdownButton.addEventListener("click", () => {
  detailsDropdownButton.classList.toggle(
    "header__nav__link-dropdown-button--open"
  );
  detailsItem.classList.toggle("header__nav__item-dropdown--open");
  detailsNavLink.classList.toggle("header__nav__link-dropdown--open");
  detailsDropdown.classList.toggle("header__dropdown--open");
  compareDropdownButton.classList.remove(
    "header__nav__link-dropdown-button--open"
  );
  compareItem.classList.remove("header__nav__item-dropdown--open");
  compareNavLink.classList.remove("header__nav__link-dropdown--open");
  compareDropdown.classList.remove("header__dropdown--open");
});
