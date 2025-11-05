"use strict";

// engine-create-js(page-scroll)
// engine-import(this)
// engine-import-generated
import { detailsDropdown, detailsDropdownButton, detailsDropdownTop, dropdown, header, headerTop, scrollTopBtn } from './dom.js';



let lastScrollY = window.scrollY;
let isHidden = false;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const headerBottom = header.offsetHeight;

  if (currentScroll <= headerBottom) {
    headerTop.classList.remove("hidden");
    scrollTopBtn.classList.remove("visible");
    headerTop.classList.remove("top-bk");
    dropdown.classList.remove("dropdown--croll");

    isHidden = false;
    return;
  }

  if (currentScroll > lastScrollY && !isHidden) {
    headerTop.classList.add("hidden");
    scrollTopBtn.classList.add("visible");
    dropdown.classList.add("dropdown--croll");
    headerTop.classList.remove("top-bk");
    detailsDropdownButton.classList.remove("dropdown-button--open");
    detailsDropdownTop.classList.remove("header__details-top--open");
    detailsDropdown.classList.remove("header__details-dropdown--open");

    isHidden = true;
  }

  if (currentScroll < lastScrollY && isHidden) {
    headerTop.classList.remove("hidden");
    headerTop.classList.add("top-bk");

    isHidden = false;
  }

  lastScrollY = currentScroll;
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

