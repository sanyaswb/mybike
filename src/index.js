// 01. CONFIG / CONSTANTS
const COLOR_GREEN = "rgba(23,120,76,0.5)";
const COLOR_RED = "rgba(155,42,42,0.5)";
const COLOR_TRANSPARENT = "rgba(0,0,0,0)";

const changeInterval = 5000;
const animationDuration = 1500;

// 02. DOM ELEMENTS

const page = document.querySelector(".page");

const logoImg = document.getElementById("logo-img");
const iconPhone = document.querySelector(".icon-phone");
const iconMenu = document.querySelector(".icon-menu");
const whiteLogoPath = logoImg.getAttribute("data-logo-white");
const blackLogoPath = logoImg.getAttribute("data-logo-black");

const header = document.getElementById("header");
const headerDetails = document.getElementById("header-details");
const navList = document.querySelector(".nav__list");

const mainSticky = document.querySelector(".main__sticky");

const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const switcher = document.querySelector(".switcher");
const switcherIcon = document.querySelector(".switcher__icon");
const switcherImg = document.querySelector(".switcher__img");

const detailsBtn = document.querySelector(".button--double-left");
const buyBtn = document.querySelector(".button--double-right");

const sliderTrack = document.getElementById("slider-track");
let currentSlide = sliderTrack.querySelector(".header__image--current");
let nextSlide = sliderTrack.querySelector(".header__image--next");

const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".icon-menu");
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

// 03. App State

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

let currentSlideIndex = 0;
let nextSlideIndex = 1;

// 04. Data Models

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
  "Super MX1000": 1,
  "Super MX2000": 2,
  "Super MX3000": 3,
};

const notWeighed = {
  id: "",
  type: "",
  name: "",
};

const propertiesToCompare = [
  { key: "cost", label: "Cost" },
  { key: "material", label: "Frame Material" },
  { key: "weight", label: "Weight (kg)" },
  { key: "diameterWheels", label: "Wheel Diameter" },
  { key: "widthFrontWheel", label: "Front Wheel Width" },
  { key: "widthBackWheel", label: "Back Wheel Width" },
  { key: "speedometer", label: "Speedometer" },
  { key: "numberSpeedGears", label: "Speed Gears" },
  { key: "electricEngine", label: "Engine Type" },
  { key: "enginePower", label: "Engine Power" },
  { key: "gyroscope", label: "Gyroscope" },
  { key: "batteryCapacity", label: "Battery (Ah)" },
  { key: "travelRange", label: "Travel Range (km)" },
  { key: "maxSpeed", label: "Max Speed (km/h)" },
  { key: "maxLoad", label: "Max Load (kg)" },
  { key: "headLight", label: "Head Light Type" },
  { key: "releaseYear", label: "Release Year" },
];

const slidesData = [
  { class: "header__image--1", details: "#details-bike1", buy: "#buy-bike1" },
  { class: "header__image--2", details: "#details-bike2", buy: "#buy-bike2" },
  { class: "header__image--3", details: "#details-bike3", buy: "#buy-bike3" },
  { class: "header__image--4", details: "#details-bike4", buy: "#buy-bike4" },
];

// 05. Utilities (pure helpers)

function getProp(bike, prop) {
  return bike?.[prop] ?? "---";
}

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

// 06. Ranges / normalization

function getProductsMaxWeights() {
  const maxValues = {};

  for (const productName in products) {
    const product = products[productName];

    for (const key in product) {
      const value = product[key];
      let numericValue;

      if (Object.hasOwn(notWeighed, key)) {
        continue;
      }

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
  return maxValues;
}

// 07. Percent / Color logic

function calculatePercentages(key, valFirst, valLast) {
  if (
    typeof valFirst !== "number" ||
    typeof valLast !== "number" ||
    isNaN(valFirst) ||
    isNaN(valLast)
  ) {
    return { leftPercent: 0, rightPercent: 0 };
  }

  const maxVal = Math.max(valFirst, valLast);

  let leftPercent = (valFirst / maxVal) * 100;
  let rightPercent = (valLast / maxVal) * 100;

  const lessIsBetter = ["weight", "price", "cost"].includes(key);
  if (lessIsBetter) {
    leftPercent = (1 - valFirst / maxVal) * 100;
    rightPercent = (1 - valLast / maxVal) * 100;
  }

  leftPercent = Math.round(leftPercent);
  rightPercent = Math.round(rightPercent);

  let leftColor = "rgba(0,0,0,0)";
  let rightColor = "rgba(0,0,0,0)";
  let decision = "none";

  if (leftPercent > rightPercent) {
    leftColor = "rgba(23,120,76,0.5)";
    rightColor = "rgba(155,42,42,0.5)";
    decision = "left-better";
  } else if (leftPercent < rightPercent) {
    leftColor = "rgba(155,42,42,0.5)";
    rightColor = "rgba(23,120,76,0.5)";
    decision = "right-better";
  } else {
    decision = "tie";
  }

  return { leftPercent, rightPercent, leftColor, rightColor, decision };
}

function decideColors(key, valFirst, valLast) {
  const hasFirst = typeof valFirst === "number";
  const hasLast = typeof valLast === "number";

  if (!hasFirst && !hasLast) {
    return {
      leftColor: COLOR_TRANSPARENT,
      rightColor: COLOR_TRANSPARENT,
      note: "none",
    };
  }

  if (hasFirst && !hasLast) {
    return {
      leftColor: COLOR_GREEN,
      rightColor: COLOR_TRANSPARENT,
      note: "only-left",
    };
  }
  if (!hasFirst && hasLast) {
    return {
      leftColor: COLOR_TRANSPARENT,
      rightColor: COLOR_GREEN,
      note: "only-right",
    };
  }

  if (key === "weight") {
    if (valFirst < valLast)
      return {
        leftColor: COLOR_GREEN,
        rightColor: COLOR_RED,
        note: "left-better",
      };
    if (valFirst > valLast)
      return {
        leftColor: COLOR_RED,
        rightColor: COLOR_GREEN,
        note: "right-better",
      };
    return {
      leftColor: COLOR_TRANSPARENT,
      rightColor: COLOR_TRANSPARENT,
      note: "tie",
    };
  } else {
    if (valFirst > valLast)
      return {
        leftColor: COLOR_GREEN,
        rightColor: COLOR_RED,
        note: "left-better",
      };
    if (valFirst < valLast)
      return {
        leftColor: COLOR_RED,
        rightColor: COLOR_GREEN,
        note: "right-better",
      };
    return {
      leftColor: COLOR_TRANSPARENT,
      rightColor: COLOR_TRANSPARENT,
      note: "tie",
    };
  }
}

// 08. Comparison logic

function whoWin() {
  if (!selectedFirstBike?.id || !selectedLastBike?.id) return;

  if (selectedFirstBike.name === selectedLastBike.name) {
    const tieGradient = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.5) 100%)`;
    compareCardFirst.style.backgroundImage = tieGradient;
    compareCardLast.style.backgroundImage = tieGradient;
    firstBikeScore = lastBikeScore = 1;
    valuesTopBar();
    return;
  }

  firstBikeScore = 0;
  lastBikeScore = 0;

  const maxValues = getProductsMaxWeights();
  let count = 0;

  for (const prop of propertiesToCompare) {
    const key = prop.key;
    const valFirst = weightsFirstBike[key];
    const valLast = weightsLastBike[key];
    const maxVal = maxValues[key];

    if (typeof valFirst !== "number" || typeof valLast !== "number" || !maxVal)
      continue;
    count++;

    let normFirst = valFirst / maxVal;
    let normLast = valLast / maxVal;

    if (key === "weight") {
      normFirst = 1 - normFirst;
      normLast = 1 - normLast;
    }

    normFirst = Math.max(normFirst, 0);
    normLast = Math.max(normLast, 0);

    firstBikeScore += normFirst;
    lastBikeScore += normLast;
  }

  if (count > 0) {
    firstBikeScore = (firstBikeScore / count) * 100;
    lastBikeScore = (lastBikeScore / count) * 100;
  }

  const gradients = {
    firstWin: [
      "rgba(42, 123, 155, 0) 0%",
      "rgba(87, 199, 133, 0.25) 50%",
      "rgba(23, 120, 76, 1) 100%",
    ],
    lastWin: [
      "rgba(155, 42, 42, 0) 0%",
      "rgba(199, 87, 87, 0.25) 50%",
      "rgba(120, 23, 23, 1) 100%",
    ],
    tie: [
      "rgba(255,255,255,0) 0%",
      "rgba(255,255,255,0.2) 50%",
      "rgba(255,255,255,0.5) 100%",
    ],
  };

  if (firstBikeScore > lastBikeScore) {
    compareCardFirst.style.backgroundImage = `linear-gradient(0deg, ${gradients.firstWin.join(
      ","
    )})`;
    compareCardLast.style.backgroundImage = `linear-gradient(0deg, ${gradients.lastWin.join(
      ","
    )})`;
  } else if (firstBikeScore < lastBikeScore) {
    compareCardFirst.style.backgroundImage = `linear-gradient(0deg, ${gradients.lastWin.join(
      ","
    )})`;
    compareCardLast.style.backgroundImage = `linear-gradient(0deg, ${gradients.firstWin.join(
      ","
    )})`;
  } else {
    const tieGradient = `linear-gradient(0deg, ${gradients.tie.join(",")})`;
    compareCardFirst.style.backgroundImage = tieGradient;
    compareCardLast.style.backgroundImage = tieGradient;
  }

  valuesTopBar();
}

function valuesTopBar() {
  const total = firstBikeScore + lastBikeScore;
  const percentFirst =
    total > 0 ? Math.round((firstBikeScore / total) * 100) : 50;
  const percentLast = 100 - percentFirst;

  firstBarProcent.innerHTML = `<p>${percentFirst}%</p>`;
  lastBarProcent.innerHTML = `<p>${percentLast}%</p>`;

  compareBarFirst.style.width = `${percentFirst}%`;
  compareBarLast.style.width = `${percentLast}%`;

  if (percentFirst > percentLast) {
    compareBarFirst.style.backgroundColor = `rgba(23, 120, 76, 1)`;
    compareBarLast.style.backgroundColor = `rgba(120, 23, 23, 1)`;
  } else if (percentFirst < percentLast) {
    compareBarFirst.style.backgroundColor = `rgba(120, 23, 23, 1)`;
    compareBarLast.style.backgroundColor = `rgba(23, 120, 76, 1)`;
  } else {
    compareBarFirst.style.backgroundColor =
      compareBarLast.style.backgroundColor = `rgba(255,255,255,0.5)`;
  }
}

// 09. Renderers

function renderCompareTable() {
  const nameFirst = selectedFirstBike?.name
    ? `${selectedFirstBike.name} ${selectedFirstBike.version}`
    : "Choose bike";
  const nameLast = selectedLastBike?.name
    ? `${selectedLastBike.name} ${selectedLastBike.version}`
    : "Choose bike";

  compareChoseBikeFirst.textContent = nameFirst;
  compareChoseBikeLast.textContent = nameLast;

  const maxValues = getProductsMaxWeights();

  let tthHTML = '<ul class="compare__tth-list">';
  for (const prop of propertiesToCompare) {
    const key = prop.key;
    const valFirst = weightsFirstBike?.[key];
    const valLast = weightsLastBike?.[key];
    const maxVal = maxValues?.[key] ?? 1;

    const { leftPercent, rightPercent } = calculatePercentages(
      key,
      valFirst,
      valLast,
      maxVal
    );
    const { leftColor, rightColor, note } = decideColors(
      key,
      valFirst,
      valLast
    );

    tthHTML += `
      <div class="compare__tth-weights"
           style="--left-width:${leftPercent}%; --right-width:${rightPercent}%; --left-color:${leftColor}; --right-color:${rightColor};"
           data-key="${key}">
        <li class="compare__tth-item">
          <p class="compare__tth-text compare__tth--first">${getProp(
            selectedFirstBike,
            key
          )}</p>
          <p class="compare__tth-text compare__tth--value">${prop.label}</p>
          <p class="compare__tth-text compare__tth--last">${getProp(
            selectedLastBike,
            key
          )}</p>
        </li>
      </div>
    `;
  }
  tthHTML += "</ul>";

  compareCardTth.innerHTML = tthHTML;

  compareCardFirst.innerHTML = `
    <div class="compare__card-img compare__card-img--first bikes__card-img--${getProp(
      selectedFirstBike,
      "id"
    )}"></div>
    <h3 class="compare__card-title">${getProp(selectedFirstBike, "name")}</h3>
  `;
  compareCardLast.innerHTML = `
    <div class="compare__card-img compare__card-img--last bikes__card-img--${getProp(
      selectedLastBike,
      "id"
    )}"></div>
    <h3 class="compare__card-title">${getProp(selectedLastBike, "name")}</h3>
  `;
}

function updateHeaderLinks(slide) {
  detailsBtn.href = slide.dataset.details;
  buyBtn.href = slide.dataset.buy;
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

// 10. Event Handlers / Bindings

switcher.addEventListener("click", () => {
  switcher.classList.toggle("switcher--day");
  switcherIcon.classList.toggle("switcher__icon--day");
  switcherImg.classList.toggle("switcher__img--day");

  const currentLogoPath = logoImg.getAttribute("src");

  if (currentLogoPath === whiteLogoPath) {
    logoImg.setAttribute("src", blackLogoPath);
  } else {
    logoImg.setAttribute("src", whiteLogoPath);
  }

  iconPhone.classList.toggle("icon-phone--black");
  iconMenu.classList.toggle("icon-menu--black");
  page.classList.toggle("theme-switcher");
});

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderLinks(currentSlide);
  setInterval(doSlide, changeInterval);
});

menuOpen.addEventListener("click", () => {
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

compareOpen.forEach((link) => {
  link.addEventListener("click", () => {
    page.classList.add("page--overflow");
    compare.classList.add("compare--open");

    if (menu.classList.contains("menu--open")) {
      menu.classList.remove("menu--open");
    }
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
