"use strict";

// engine-create-js(dom)
// engine-import(this)

const page = document.querySelector(".page");

const logoImg = document.getElementById("logo-img");
const iconPhone = document.querySelector(".icon-phone");
const iconMenu = document.querySelector(".icon-menu");
const iconShop = document.getElementById("icon-shop");
const whiteLogoPath = logoImg.getAttribute("data-logo-white");
const blackLogoPath = logoImg.getAttribute("data-logo-black");

const header = document.getElementById("header");
const headerTop = document.querySelector(".header__top");
const headerDetails = document.getElementById("header-details");
const navList = document.querySelector(".nav__list");

const mainSticky = document.querySelector(".main__sticky");
const scrollTopBtn = document.querySelector(".scroll-top");

const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const switcher = document.querySelector(".switcher");
const switcherIcon = document.querySelector(".switcher__icon");
const switcherImg = document.querySelector(".switcher__img");

const buyBtnLeft = document.querySelector(".button--double-left");
const buyBtnLeftAll = document.querySelectorAll(".button--double-left");
const buyBtnRightAll = document.querySelectorAll(".button--double-right");
const buyBtn = document.querySelectorAll('[data-buy="buy-button"]');

const sliderTrack = document.getElementById("slider-track");

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".icon-menu");
const menuClose = document.querySelectorAll('[data-menu-close="add-event"]');
const menuDetailsLink = document.querySelector(".menu__details-link");
const menuDetailsDropdown = document.querySelector(".menu__details-dropdown");
const menuDropdownButton = document.getElementById("menu-dropdown-button");

const detailContainer = document.querySelectorAll(".detail__container");
const detailImage = document.querySelectorAll(".detail__image");
const detailsDropdownTop = document.getElementById("details-dropdown-top");
const detailsNavLink = document.getElementById("details-nav-link");
const detailsDropdownButton = document.getElementById("header-dropdown-button");
const detailsButtonEvent = document.querySelectorAll(
  '[data-dropdown-button="add-event"]'
);
const detailsDropdown = document.getElementById("details-dropdown");
const detailsDropdownLinks = document.querySelectorAll(
  ".dropdown__details-link"
);

const compare = document.getElementById("compare");
const compareOpen = document.querySelectorAll(
  '[data-compare-open="add-event"]'
);
const compareButton = document.getElementById("compare-button");
const compareDropdownButtonFirst = document.getElementById(
  "compare-dropdown-button-first"
);
const compareDropdownButtonLast = document.getElementById(
  "compare-dropdown-button-last"
);
const compareLists = document.getElementById("compare-lists");
const compareDropdownListFirst = document.getElementById(
  "compare-dropdown-list-first"
);
const compareDropdownListLast = document.getElementById(
  "compare-dropdown-list-last"
);
const compareChoseBikeFirst = document.getElementById(
  "compare-chose-bike-first"
);
const compareChoseBikeLast = document.getElementById("compare-chose-bike-last");

const compareDropdownEventFirst = document.querySelectorAll(
  '[data-compare-top="add-event-first"]'
);
const compareDropdowEventLast = document.querySelectorAll(
  '[data-compare-top="add-event-last"]'
);

const compareDropdownTopFirst = document.getElementById(
  "compare-dropdown-top-first"
);
const compareDropdownTopLast = document.getElementById(
  "compare-dropdown-top-last"
);
const compareCardTth = document.querySelector(".compare__card-tth");
const compareCardFirst = document.querySelector(".compare__card--first");
const compareCardLast = document.querySelector(".compare__card--last");
const compareBarFirst = document.querySelector(".compare__bar--first");
const compareBarLast = document.querySelector(".compare__bar--last");
const firstBarProcent = document.getElementById("first-bar-procent");
const lastBarProcent = document.getElementById("last-bar-procent");
const compareWeightLeft = document.querySelector(".compare__tth-weights--left");
const compareWeightRight = document.querySelector(
  ".compare__tth-weights--right"
);

export {
  blackLogoPath,
  buyBtn,
  buyBtnLeft,
  buyBtnLeftAll,
  buyBtnRightAll,
  compare,
  compareBarFirst,
  compareBarLast,
  compareButton,
  compareCardFirst,
  compareCardLast,
  compareCardTth,
  compareChoseBikeFirst,
  compareChoseBikeLast,
  compareDropdowEventLast,
  compareDropdownButtonFirst,
  compareDropdownButtonLast,
  compareDropdownEventFirst,
  compareDropdownListFirst,
  compareDropdownListLast,
  compareDropdownTopFirst,
  compareDropdownTopLast,
  compareLists,
  compareOpen,
  detailContainer,
  detailImage,
  detailsButtonEvent,
  detailsDropdown,
  detailsDropdownButton,
  detailsDropdownLinks,
  detailsDropdownTop,
  dropdown,
  firstBarProcent,
  header,
  headerTop,
  iconMenu,
  iconPhone,
  iconShop,
  lastBarProcent,
  logoImg,
  menu,
  menuClose,
  menuDetailsDropdown,
  menuDetailsLink,
  menuDropdownButton,
  menuIcon,
  page,
  scrollTopBtn,
  sliderTrack,
  switcher,
  switcherIcon,
  switcherImg,
  whiteLogoPath
};
