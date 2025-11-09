"use strict";

import {
  detailContainer,
  detailImage,
  detailsButtonEvent,
  detailsDropdown,
  detailsDropdownButton,
  detailsDropdownLinks,
  detailsDropdownTop,
  logoImg,
  menu,
  menuClose,
  menuDetailsDropdown,
  menuDetailsLink,
  menuDropdownButton,
  menuIcon,
  page,
  switcher,
  switcherIcon,
  switcherImg,
} from "./dom.js";

const whiteLogoURL = new URL(
  "../../images/icons/logo-my-bike-white.svg",
  import.meta.url
);
const blackLogoURL = new URL(
  "../../images/icons/logo-my-bike-black.svg",
  import.meta.url
);

if (switcher) {
  switcher.addEventListener("click", () => {
    const html = document.documentElement;
    const isLight = html.dataset.theme === "light";

    switcherIcon.classList.toggle("switcher__icon--day");
    switcherImg.classList.toggle("switcher__img--day");

    if (isLight) {
      logoImg.src = whiteLogoURL.href;
    } else {
      logoImg.src = blackLogoURL.href;
    }

    if (isLight) {
      html.removeAttribute("data-theme");
    } else {
      html.dataset.theme = "light";
    }
  });
}

menuIcon.addEventListener("click", () => {
  page.classList.toggle("page--overflow");
  menu.classList.toggle("menu--open");
});

menuClose.forEach((link) => {
  link.addEventListener("click", () => {
    page.classList.remove("page--overflow");
    menu.classList.remove("menu--open");
    menuDetailsLink.classList.remove("menu__details-link--open");
    menuDetailsDropdown.classList.remove("menu__details-dropdown--open");
    menuDropdownButton.classList.remove("dropdown-button--open");
  });
});

detailContainer.forEach((section) => {
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

detailsButtonEvent.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    detailsDropdownButton.classList.toggle("dropdown-button--open");
    detailsDropdownTop.classList.toggle("header__details-top--open");
    detailsDropdown.classList.toggle("header__details-dropdown--open");
    menuDropdownButton.classList.toggle("dropdown-button--open");
    menuDetailsDropdown.classList.toggle("menu__details-dropdown--open");
    menuDetailsLink.classList.toggle("menu__details-link--open");
  });
});

detailsDropdownLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();

    detailsDropdownButton.classList.remove("dropdown-button--open");
    detailsDropdownTop.classList.remove("header__details-top--open");
    detailsDropdown.classList.remove("header__details-dropdown--open");
    menuDropdownButton.classList.remove("dropdown-button--open");
    menuDetailsDropdown.classList.remove("menu__details-dropdown--open");
    menu.classList.remove("menu--open");
    menuDetailsLink.classList.remove("menu__details-link--open");
  });
});
