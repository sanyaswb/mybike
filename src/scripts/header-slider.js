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

const allSlides = Array.from(sliderTrack.querySelectorAll(".header__image"));
const totalSlides = allSlides.length;

let currentSlideIndex = 0;

function updateHeaderLinks(slide) {
  if (slide.dataset.details) {
    buyBtnLeft.href = slide.dataset.details;
  }
  if (slide.dataset.buy) {
    buyBtnRightAll.href = slide.dataset.buy;
  }
}

function doSlide() {
  if (sliderTrack.classList.contains("is-animating")) {
    return;
  }
  sliderTrack.classList.add("is-animating");

  const currentSlide = allSlides[currentSlideIndex];

  const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
  const nextSlide = allSlides[nextSlideIndex];

  const futureSlideIndex = (nextSlideIndex + 1) % totalSlides;
  const futureSlide = allSlides[futureSlideIndex];

  setTimeout(() => {
    sliderTrack.classList.remove("is-animating");

    currentSlide.classList.remove("header__image--current");
    nextSlide.classList.remove("header__image--next");
    nextSlide.classList.add("header__image--current");
    futureSlide.classList.add("header__image--next");

    currentSlideIndex = nextSlideIndex;

    updateHeaderLinks(nextSlide);
  }, animationDuration);
}

let currentShopCount = 0;
function updateShopCounter(elementId, newCount) {
  const contentValue = `"${newCount}"`;
  iconShop.style.setProperty("--shop-count", contentValue);
  menuIcon.style.setProperty("--shop-count", contentValue);
}
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

if (totalSlides < 2) {
  console.warn("Header Slider: Недостатньо слайдів для запуску.");
} else {
  allSlides.forEach((slide) => {
    slide.classList.remove("header__image--current", "header__image--next");
  });

  allSlides[0].classList.add("header__image--current");
  allSlides[1].classList.add("header__image--next");

  updateHeaderLinks(allSlides[0]);

  setInterval(doSlide, changeInterval);
}
