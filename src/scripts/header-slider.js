"use strict";

import { animationDuration, changeInterval } from "./config.js";
import {
  buyBtn,
  buyBtnLeft,
  buyBtnRightAll,
  iconShop,
  menuIcon,
  sliderTrack,
} from "./dom.js";
import { slidesData } from "./data.js";

let currentSlide = sliderTrack.querySelector(".header__image--current");
let nextSlide = sliderTrack.querySelector(".header__image--next");
let currentSlideIndex = 0;
let nextSlideIndex = 1;
let currentShopCount = 0;

function updateHeaderLinks(slide) {
  buyBtnLeft.href = slide.dataset.details;
  buyBtnRightAll.href = slide.dataset.buy;
}

function doSlide() {
  sliderTrack.classList.add("is-animating");

  setTimeout(() => {
    sliderTrack.classList.remove("is-animating");
    currentSlide.className = `header__image ${slidesData[currentSlideIndex].class}`;
    nextSlide.className = `header__image ${slidesData[nextSlideIndex].class} header__image--current`;

    updateHeaderLinks(nextSlide);

    currentSlideIndex = nextSlideIndex;
    nextSlideIndex = (nextSlideIndex + 1) % slidesData.length;

    const newNextSlide = document.createElement("div");

    newNextSlide.className = `header__image ${slidesData[nextSlideIndex].class} header__image--next`;
    newNextSlide.dataset.details = slidesData[nextSlideIndex].details;
    newNextSlide.dataset.buy = slidesData[nextSlideIndex].buy;

    sliderTrack.innerHTML = "";
    sliderTrack.appendChild(nextSlide);
    sliderTrack.appendChild(newNextSlide);

    currentSlide = nextSlide;
    nextSlide = newNextSlide;
  }, animationDuration);
}

function updateShopCounter(elementId, newCount) {
  const contentValue = `"${newCount}"`;
  iconShop.style.setProperty("--shop-count", contentValue);
  menuIcon.style.setProperty("--shop-count", contentValue);
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderLinks(currentSlide);
  setInterval(doSlide, changeInterval);
});

buyBtn.forEach((button) => {
  button.addEventListener("click", () => {
    currentShopCount += 1;

    if (currentShopCount != 0) {
      iconShop.classList.add("counter--open");
      menuIcon.classList.add("counter--open");
    } else {
      iconShop.classList.remove("counter--open");
      menuIcon.classList.remove("counter--open");
    }

    updateShopCounter(iconShop, currentShopCount);
  });
});
