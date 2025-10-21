const page = document.querySelector(".page");
const header = document.getElementById("header");
const headerDetails = document.getElementById("header-details");
const mainSticky = document.querySelector(".main__sticky");

const logoImg = document.getElementById("logo-img");
const iconPhone = document.querySelector(".icon-phone");
const iconMenu = document.querySelector(".icon-menu");
const whiteLogoPath = logoImg.getAttribute("data-logo-white");
const blackLogoPath = logoImg.getAttribute("data-logo-black");

const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const switcher = document.querySelector(".switcher");
const switcherIcon = document.querySelector(".switcher__icon");
const switcherImg = document.querySelector(".switcher__img");

switcher.addEventListener("click", () => {
  switcher.classList.toggle("switcher--day");
  switcherIcon.classList.toggle("switcher__icon--day");
  switcherImg.classList.toggle("switcher__img--day");

  const currentLogoPath = logoImg.getAttribute("src");
  console.log(currentLogoPath);

  if (currentLogoPath === whiteLogoPath) {
    logoImg.setAttribute("src", blackLogoPath);
  } else {
    logoImg.setAttribute("src", whiteLogoPath);
  }

  iconPhone.classList.toggle("icon-phone--black");
  iconMenu.classList.toggle("icon-menu--black");
  page.classList.toggle("theme-switcher");
});

const detailsBtn = document.querySelector(".button--double-left");
const buyBtn = document.querySelector(".button--double-right");

const sliderTrack = document.getElementById("slider-track");
let currentIndex = 0;
let nextIndex = 1;
const changeInterval = 5000;
const animationDuration = 1500;

const slidesData = [
  { class: "header__image--1", details: "#details-bike1", buy: "#buy-bike1" },
  { class: "header__image--2", details: "#details-bike2", buy: "#buy-bike2" },
  { class: "header__image--3", details: "#details-bike3", buy: "#buy-bike3" },
  { class: "header__image--4", details: "#details-bike4", buy: "#buy-bike4" },
];
let currentSlide = sliderTrack.querySelector(".header__image--current");
let nextSlide = sliderTrack.querySelector(".header__image--next");

function updateHeaderLinks(slide) {
  detailsBtn.href = slide.dataset.details;
  buyBtn.href = slide.dataset.buy;
}

function doSlide() {
  sliderTrack.classList.add("is-animating");

  setTimeout(() => {
    sliderTrack.classList.remove("is-animating");
    currentSlide.className = `header__image ${slidesData[currentIndex].class}`;
    nextSlide.className = `header__image ${slidesData[nextIndex].class} header__image--current`;

    updateHeaderLinks(nextSlide);

    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % slidesData.length;

    const newNextSlide = document.createElement("div");

    newNextSlide.className = `header__image ${slidesData[nextIndex].class} header__image--next`;
    newNextSlide.dataset.details = slidesData[nextIndex].details;
    newNextSlide.dataset.buy = slidesData[nextIndex].buy;

    sliderTrack.innerHTML = "";
    sliderTrack.appendChild(nextSlide);
    sliderTrack.appendChild(newNextSlide);

    currentSlide = nextSlide;
    nextSlide = newNextSlide;
  }, animationDuration);
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderLinks(currentSlide);
  setInterval(doSlide, changeInterval);
});

const navList = document.querySelector(".nav__list");

const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".icon-menu");
const menuClose = document.querySelector(".icon--close");

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

const detailContainer = document.querySelectorAll(".detail__container");
const detailImage = document.querySelectorAll(".detail__image");
const detailsDropdownTop = document.getElementById("details-dropdown-top");
const detailsNavLink = document.getElementById("details-nav-link");
const detailsDropdownButton = document.getElementById(
  "details-dropdown-button"
);
const detailsButtonEvent = document.querySelectorAll(
  '[data-dropdown-button="add-event"]'
);
const detailsDropdown = document.getElementById("details-dropdown");
const detailsDropdownLinks = document.querySelectorAll(
  ".dropdown__details-link"
);

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
  });
});

detailsDropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    detailsDropdownButton.classList.remove("dropdown-button--open");
    detailsDropdownTop.classList.remove("header__details-top--open");
    detailsDropdown.classList.remove("header__details-dropdown--open");
  });
});

const compareNavLink = document.getElementById("compare-nav-link");
const compare = document.getElementById("compare");
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
const compareCardFirst = document.querySelector(".compare__card--first");
const compareCardLast = document.querySelector(".compare__card--last");
const compareBarFirst = document.querySelector(".compare__bar--first");
const compareBarLast = document.querySelector(".compare__bar--last");

compareNavLink.addEventListener("click", () => {
  page.classList.add("page--overflow");
  compare.classList.add("compare--open");
});

compareButton.addEventListener("click", () => {
  page.classList.remove("page--overflow");
  compare.classList.remove("compare--open");
  compareDropdownListFirst.classList.remove("compare__dropdown-list--open");
  compareDropdownListLast.classList.remove("compare__dropdown-list--open");
  compareDropdownTopFirst.classList.remove("compare__dropdown-top--open");
  compareDropdownTopLast.classList.remove("compare__dropdown-top--open");
  compareDropdownButtonFirst.classList.remove("dropdown-button--open");
  compareDropdownButtonLast.classList.remove("dropdown-button--open");
});

compareDropdownEventFirst.forEach((firstButton) => {
  firstButton.addEventListener("click", (event) => {
    event.stopPropagation();
    compareDropdownButtonFirst.classList.toggle("dropdown-button--open");
    compareDropdownListFirst.classList.toggle("compare__dropdown-list--open");
    compareDropdownTopFirst.classList.toggle("compare__dropdown-top--open");
  });
});

compareDropdowEventLast.forEach((lastButton) => {
  lastButton.addEventListener("click", (event) => {
    event.stopPropagation();
    compareDropdownButtonLast.classList.toggle("dropdown-button--open");
    compareDropdownListLast.classList.toggle("compare__dropdown-list--open");
    compareDropdownTopLast.classList.toggle("compare__dropdown-top--open");
  });
});

const firstBarProcent = document.getElementById("first-bar-procent");
const lastBarProcent = document.getElementById("last-bar-procent");

let sporty4Cost = 2549;
let cowboy4STCost = 3424;
let cowboyC3Cost = 2249;
let amiraSL4Cost = 2689;

let firstBikeScore = 0;
let lastBikeScore = 0;

let selectedFirstBike = {};
let selectedLastBike = {};
let weightsFirstBike = {};
let weightsLastBike = {};

const sporty4 = {
  id: "1",
  type: "electric",
  name: "Sporty",
  version: 4,
  cost: `$ ${sporty4Cost}`,
  color: ["black", "white"],
  material: "Aluminum",
  height: 677,
  lengt: 1855,
  width: 610,
  weight: 20.2,
  diameterWheels: 10,
  widthFrontWheel: 40,
  widthBackWheel: 56,
  speedometer: "Yes",
  numberSpeedGears: 12,
  electricEngine: "Super MX2000",
  enginePower: 500,
  gyroscope: "No",
  batteryCapacity: 20,
  travelRange: 40,
  maxSpeed: 70,
  maxLoad: 120,
  headLight: "Xenon",
  releaseYear: 2025,
};

const cowboy4ST = {
  id: "2",
  type: "electric",
  name: "Cowboy ST",
  version: 4,
  cost: `$ ${cowboy4STCost}`,
  color: ["black", "white", "yellow"],
  material: "Titan",
  height: 647,
  lengt: 1725,
  width: 557,
  weight: 17.1,
  diameterWheels: 12,
  widthFrontWheel: 43,
  widthBackWheel: 53,
  speedometer: "Yes",
  numberSpeedGears: 13,
  electricEngine: "Super MX3000",
  enginePower: 700,
  gyroscope: "Yes",
  batteryCapacity: 25,
  travelRange: 50,
  maxSpeed: 88,
  maxLoad: 126,
  headLight: "LED",
  releaseYear: 2025,
};

const cowboyC3 = {
  id: "3",
  type: "electric",
  name: "Cowboy C",
  version: 3,
  cost: `$ ${cowboyC3Cost}`,
  color: ["grey"],
  material: "Titan",
  height: 637,
  lengt: 1625,
  width: 760,
  weight: 25.2,
  diameterWheels: 9,
  widthFrontWheel: 40,
  widthBackWheel: 40,
  speedometer: "No",
  numberSpeedGears: 6,
  electricEngine: "Super MX1000",
  enginePower: 400,
  gyroscope: "No",
  batteryCapacity: 10,
  travelRange: 20,
  maxSpeed: 50,
  maxLoad: 90,
  headLight: "Halogen",
  releaseYear: 2024,
};

const amiraSL4 = {
  id: "4",
  type: "classic",
  name: "Amira SL",
  version: 4,
  cost: `$ ${amiraSL4Cost}`,
  color: ["black"],
  material: "Carbone",
  height: 654,
  lengt: 1589,
  width: 678,
  weight: 2.2,
  diameterWheels: 12,
  widthFrontWheel: 20,
  widthBackWheel: 20,
  speedometer: "---",
  numberSpeedGears: 20,
  electricEngine: "---",
  enginePower: "---",
  gyroscope: "---",
  batteryCapacity: "---",
  travelRange: "---",
  maxSpeed: "---",
  maxLoad: 90,
  headLight: "---",
  releaseYear: 2025,
};

const products = {
  "sporty-4": sporty4,
  "cowboy-4-st": cowboy4ST,
  "cowboy-c-3": cowboyC3,
  "amira-sl-4": amiraSL4,
};

const weights = {
  Carbone: 5,
  Titan: 3,
  Aluminum: 2,
  "Stainless steel": 1,
  Steel: 0,
  Yes: 1,
  No: 0,
  Halogen: 1,
  LED: 2,
  Xenon: 3,
  "---": 0,
};

const maxValues = {};

for (const productName in products) {
  const product = products[productName];

  for (const key in product) {
    const value = product[key];
    let numericValue;

    if (typeof value === "number") {
      numericValue = value;
    } else if (weights[value] !== undefined) {
      numericValue = weights[value];
    } else {
      continue;
    }

    if (key === "weight") {
      if (maxValues[key] === undefined || numericValue < maxValues[key]) {
        maxValues[key] = numericValue;
      }
    } else {
      if (maxValues[key] === undefined || numericValue > maxValues[key]) {
        maxValues[key] = numericValue;
      }
    }
  }
}

function valuesTopBar() {
  let allProcent = firstBikeScore + lastBikeScore;
  let procentFirstBar = Math.round(+((firstBikeScore / allProcent) * 100));
  let procentLastBar = Math.round(+((lastBikeScore / allProcent) * 100));

  if (procentFirstBar === 100) {
    firstBarProcent.innerHTML = `
      <p>${procentFirstBar}%</p>`;
    lastBarProcent.innerHTML = `
      <p></p>`;
  } else if (procentLastBar === 100) {
    lastBarProcent.innerHTML = `
      <p>${procentLastBar}%</p>`;
    firstBarProcent.innerHTML = `
      <p></p>`;
  } else {
    firstBarProcent.innerHTML = `
      <p>${procentFirstBar}%</p>`;
    lastBarProcent.innerHTML = `
      <p>${procentLastBar}%</p>`;
  }

  compareBarFirst.style.width = `${procentFirstBar}%`;
  compareBarLast.style.width = `${procentLastBar}%`;

  console.log(procentFirstBar);
  console.log(procentLastBar);

  if (procentFirstBar > 50) {
    compareBarFirst.style.backgroundColor = `rgba(23, 120, 76, 1)`;
    compareBarLast.style.backgroundColor = `rgba(120, 23, 23, 1)`;
  } else if (procentFirstBar < 50) {
    compareBarFirst.style.backgroundColor = `rgba(120, 23, 23, 1)`;
    compareBarLast.style.backgroundColor = `rgba(23, 120, 76, 1)`;
  } else {
    compareBarFirst.style.backgroundColor = `rgba(255, 255, 255, 0.5)`;
    compareBarLast.style.backgroundColor = `rgba(255, 255, 255, 0.5)`;
  }

  firstBikeScore = 0;
  lastBikeScore = 0;
  weightsFirstBike = {};
  weightsLastBike = {};
}

function whoWin() {
  if (Object.entries(weightsFirstBike).length === 0) {
    console.log("NO chosed first bike!");
    return;
  } else if (Object.entries(weightsLastBike).length === 0) {
    console.log("NO chosed last bike!");
    return;
  }

  if (selectedFirstBike.name === selectedLastBike.name) {
    compareCardFirst.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.5) 100%
    )`;
    compareCardLast.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.5) 100%
    )`;

    return (firstBikeScore = 1), (lastBikeScore = 1), valuesTopBar();
  }

  for (const key in weightsFirstBike) {
    if (
      typeof weightsFirstBike[key] === "string" ||
      key === "cost" ||
      key === "color" ||
      key === "height" ||
      key === "lengt" ||
      key === "width"
    ) {
      continue;
    }

    if (key === "weight") {
      if (weightsFirstBike[key] < weightsLastBike[key]) {
        firstBikeScore += 1;
      } else if (weightsFirstBike[key] > weightsLastBike[key]) {
        lastBikeScore += 1;
      }
      continue;
    }

    if (weightsFirstBike[key] > weightsLastBike[key]) {
      firstBikeScore += 1;
    } else if (weightsFirstBike[key] < weightsLastBike[key]) {
      lastBikeScore += 1;
    }
  }

  if (firstBikeScore > lastBikeScore) {
    compareCardFirst.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(42, 123, 155, 0) 0%,
      rgba(87, 199, 133, 0.25) 50%,
      rgba(23, 120, 76, 1) 100%
    )`;
    compareCardLast.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(155, 42, 42, 0) 0%,
      rgba(199, 87, 87, 0.25) 50%,
      rgba(120, 23, 23, 1) 100%
    )`;
  } else if (firstBikeScore < lastBikeScore) {
    compareCardFirst.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(155, 42, 42, 0) 0%,
      rgba(199, 87, 87, 0.25) 50%,
      rgba(120, 23, 23, 1) 100%
    )`;
    compareCardLast.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(42, 123, 155, 0) 0%,
      rgba(87, 199, 133, 0.25) 50%,
      rgba(23, 120, 76, 1) 100%
    )`;
  }

  valuesTopBar();
}

function renderCompareTable() {
  if (selectedFirstBike.name) {
    compareChoseBikeFirst.textContent = `${selectedFirstBike.name} ${selectedFirstBike.version}`;
  } else {
    compareChoseBikeFirst.textContent = "Choose bike";
  }

  if (selectedLastBike.name) {
    compareChoseBikeLast.textContent = `${selectedLastBike.name} ${selectedLastBike.version}`;
  } else {
    compareChoseBikeLast.textContent = "Choose bike";
  }

  function getProp(bike, prop) {
    return bike[prop] ?? "---";
  }

  compareCardFirst.innerHTML = `
    <div
      class="compare__card-img compare__card-img--first bikes__card-img--${getProp(
        selectedFirstBike,
        "id"
      )}"
    ></div>
    <h3 class="compare__card-title">${getProp(selectedFirstBike, "name")}</h3>
    <div class="compare__card-tth">
      <ul class="compare__tth compare__tth-list">
        <li class="compare__tth-item compare__tth__weight--first compare__tth__weight--last">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "cost"
          )}</p>
          <p class="compare__tth--value">Cost</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "cost"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "type"
          )}</p>
          <p class="compare__tth--value">Type</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "type"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "version"
          )}</p>
          <p class="compare__tth--value">Version</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "version"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "material"
          )}</p>
          <p class="compare__tth--value">Material</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "material"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "lengt"
          )}</p>
          <p class="compare__tth--value">Lengt</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "lengt"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "height"
          )}</p>
          <p class="compare__tth--value">Height</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "height"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "width"
          )}</p>
          <p class="compare__tth--value">Width</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "width"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "weight"
          )}</p>
          <p class="compare__tth--value">Weight</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "weight"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "diameterWheels"
          )}</p>
          <p class="compare__tth--value">Diameter wheels</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "diameterWheels"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "widthFrontWheel"
          )}</p>
          <p class="compare__tth--value">Width front wheel</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "widthFrontWheel"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "widthBackWheel"
          )}</p>
          <p class="compare__tth--value">Width back wheel</p>
          <p class="compare__tth--last">${getProp(
            selectedLastBike,
            "widthBackWheel"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "speedometer"
          )}</p>
          <p class="compare__tth--value">Speedometer</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "speedometer"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "numberSpeedGears"
          )}</p>
          <p class="compare__tth--value">Number speed gears</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "numberSpeedGears"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "electricEngine"
          )}</p>
          <p class="compare__tth--value">Engine</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "electricEngine"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "enginePower"
          )}</p>
          <p class="compare__tth--value">Engine power</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "enginePower"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "gyroscope"
          )}</p>
          <p class="compare__tth--value">Gyroscope</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "gyroscope"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "batteryCapacity"
          )}</p>
          <p class="compare__tth--value">Battery capacity</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "batteryCapacity"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "travelRange"
          )}</p>
          <p class="compare__tth--value">Travel range</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "travelRange"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "maxSpeed"
          )}</p>
          <p class="compare__tth--value">Max speed</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "maxSpeed"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "maxLoad"
          )}</p>
          <p class="compare__tth--value">Max load</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "maxLoad"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "headLight"
          )}</p>
          <p class="compare__tth--value">Head light</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "headLight"
          )}</p>
        </li>
        <li class="compare__tth-item">
          <p class="compare__tth--first">${getProp(
            selectedFirstBike,
            "releaseYear"
          )}</p>
          <p class="compare__tth--value">Release year</p><p class="compare__tth--last">${getProp(
            selectedLastBike,
            "releaseYear"
          )}</p>
        </li>
      </ul>
    </div>
  `;

  compareCardLast.innerHTML = `
      <div
        class="compare__card-img compare__card-img--last bikes__card-img--${getProp(
          selectedLastBike,
          "id"
        )}"
      ></div>
      <h3 class="compare__card-title">${getProp(selectedLastBike, "name")}</h3>
  `;
}

compareLists.addEventListener("click", (event) => {
  const targetElement = event.target.closest("[data-product-id]");

  if (!targetElement) return;

  const productId = targetElement.dataset.productId;
  const [id, slot] = productId.split("--");
  const bikeData = products[id];

  if (!bikeData) return;

  if (slot === "first") {
    selectedFirstBike = { ...bikeData };
    weightsFirstBike = { ...bikeData };
    compareDropdownButtonFirst.classList.toggle("dropdown-button--open");
    compareDropdownListFirst.classList.toggle("compare__dropdown-list--open");
    compareDropdownTopFirst.classList.toggle("compare__dropdown-top--open");

    for (const key in weightsFirstBike) {
      for (const i in weights) {
        if (i === selectedFirstBike[key]) {
          weightsFirstBike[key] = weights[i];
        }
      }
    }
    whoWin();
  } else if (slot === "last") {
    selectedLastBike = { ...bikeData };
    weightsLastBike = { ...bikeData };
    compareDropdownButtonLast.classList.toggle("dropdown-button--open");
    compareDropdownListLast.classList.toggle("compare__dropdown-list--open");
    compareDropdownTopLast.classList.toggle("compare__dropdown-top--open");

    for (const key in weightsLastBike) {
      for (const i in weights) {
        if (i === selectedLastBike[key]) {
          weightsLastBike[key] = weights[i];
        }
      }
    }
    whoWin();
  }

  renderCompareTable();
});

const clickPageDeletedClasses = (...targets) => {
  page.addEventListener("click", (event) => {
    const clickedInside = targets.some(({ el }) => {
      el.contains(event.target);
    });

    if (clickedInside) return;

    for (const { el, className } of targets) {
      el.classList.remove(className);
    }
  });
};

const clickCompareDeletedClasses = (...targets) => {
  compare.addEventListener("click", (event) => {
    const clickedInside = targets.some(({ el }) => {
      el.contains(event.target);
    });

    if (clickedInside) return;

    for (const { el, className } of targets) {
      el.classList.remove(className);
    }
  });
};

clickPageDeletedClasses(
  {
    el: detailsDropdownButton,
    className: "dropdown-button--open",
  },
  {
    el: detailsDropdownTop,
    className: "header__details-top--open",
  },
  { el: detailsDropdown, className: "header__details-dropdown--open" }
);

clickCompareDeletedClasses(
  {
    el: compareDropdownButtonFirst,
    className: "dropdown-button--open",
  },
  {
    el: compareDropdownListFirst,
    className: "compare__dropdown-list--open",
  },
  { el: compareDropdownTopFirst, className: "compare__dropdown-top--open" },
  {
    el: compareDropdownButtonLast,
    className: "dropdown-button--open",
  },
  {
    el: compareDropdownListLast,
    className: "compare__dropdown-list--open",
  },
  { el: compareDropdownTopLast, className: "compare__dropdown-top--open" }
);

// const getMaxWidth = () => {
//   const navListWidth = navList.clientWidth;
//   return `${navListWidth}px`;
// };

// dropdown.style.maxWidth = getMaxWidth();

// document.addEventListener("DOMContentLoaded", renderCompareTable);
