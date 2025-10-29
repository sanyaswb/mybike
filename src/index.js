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
const menuClose = document.querySelectorAll('[data-menu-close="add-event"]');
const menuDetailsLink = document.querySelector(".menu__details-link");
const menuDetailsDropdown = document.querySelector(".menu__details-dropdown");
const menuDropdownButton = document.getElementById("menu-dropdown-button");

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

const compareOpen = document.querySelectorAll(
  '[data-compare-open="add-event"]'
);

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
const compareCardTth = document.querySelector(".compare__card-tth");
const compareCardFirst = document.querySelector(".compare__card--first");
const compareCardLast = document.querySelector(".compare__card--last");
const compareBarFirst = document.querySelector(".compare__bar--first");
const compareBarLast = document.querySelector(".compare__bar--last");

compareOpen.forEach((link) => {
  link.addEventListener("click", () => {
    page.classList.add("page--overflow");
    compare.classList.add("compare--open");

    if (menu.classList.contains("menu--open")) {
      menu.classList.remove("menu--open");
    }
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

function getProductsMaxWeights() {
  const maxValues = {};

  for (const productName in products) {
    const product = products[productName];

    debugger;

    for (const key in product) {
      const value = product[key];
      let numericValue;

      if (Object.hasOwn(notWeighed, key)) {
        console.log(`${key} це не зважується`);
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
  if (!selectedFirstBike.name || !selectedLastBike.name) return;

  if (selectedFirstBike.name === selectedLastBike.name) {
    const tieGradient = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.5) 100%)`;
    compareCardFirst.style.backgroundImage = tieGradient;
    compareCardLast.style.backgroundImage = tieGradient;
    firstBikeScore = lastBikeScore = 1;
    valuesTopBar();
    return;
  }

  firstBikeScore = lastBikeScore = 0;

  for (const prop of propertiesToCompare) {
    const key = prop.key;
    const valFirst = weightsFirstBike[key];
    const valLast = weightsLastBike[key];

    if (typeof valFirst !== "number" || typeof valLast !== "number") continue;

    if (key === "weight") {
      if (valFirst < valLast) firstBikeScore++;
      else if (valFirst > valLast) lastBikeScore++;
    } else {
      if (valFirst > valLast) firstBikeScore++;
      else if (valFirst < valLast) lastBikeScore++;
    }
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

function renderCompareTable() {
  compareChoseBikeFirst.textContent = selectedFirstBike.name
    ? `${selectedFirstBike.name} ${selectedFirstBike.version}`
    : "Choose bike";
  compareChoseBikeLast.textContent = selectedLastBike.name
    ? `${selectedLastBike.name} ${selectedLastBike.version}`
    : "Choose bike";

  function getProp(bike, prop) {
    return bike[prop] ?? "---";
  }

  let tthHTML = '<ul class="compare__tth-list">';
  for (const prop of propertiesToCompare) {
    tthHTML += `
      <div class="compare__tth-weights compare__tth-weights--left compare__tth-weights--right">
        <li class="compare__tth-item">
          <p class="compare__tth-text compare__tth--first">${getProp(
            selectedFirstBike,
            prop.key
          )}</p>
          <p class="compare__tth-text compare__tth--value">${prop.label}</p>
          <p class="compare__tth-text compare__tth--last">${getProp(
            selectedLastBike,
            prop.key
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
