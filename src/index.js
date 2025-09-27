const page = document.querySelector(".page");
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");
const menuOpen = document.querySelector(".icon--menu");
const menuClose = document.querySelector(".icon--close");
const detailImages = document.querySelectorAll(".detail__images");
const detailImage = document.querySelectorAll(".detail__image");

const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const detailsDropdownTop = document.getElementById("details-dropdown-top");
const detailsNavLink = document.getElementById("details-nav-link");
const detailsDropdownButton = document.getElementById(
  "details-dropdown-button"
);
const detailsDropdown = document.getElementById("details-dropdown");
const detailsDropdownLinks = document.querySelectorAll(
  ".dropdown__details__link"
);

const compareNavLink = document.getElementById("compare-nav-link");
const compare = document.getElementById("compare");
const compareButton = document.getElementById("compare-button");
const compareDropdownButtonFirst = document.getElementById(
  "compare-dropdown-button-first"
);
const compareDropdownButtonLast = document.getElementById(
  "compare-dropdown-button-last"
);

// const compareLists = document.getElementById("compare-lists");

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
const compareDropdownTopFirst = document.getElementById(
  "compare-dropdown-top-first"
);
const compareDropdownTopLast = document.getElementById(
  "compare-dropdown-top-last"
);

const compareCardFirst = document.querySelector(".compare__card--first");
const compareCardLast = document.querySelector(".compare__card--last");

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

dropdown.style.maxWidth = getMaxWidth();

detailsDropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();

  detailsDropdownButton.classList.toggle("dropdown-button--open");
  detailsDropdownTop.classList.toggle("header__nav__details__top--open");
  detailsNavLink.classList.toggle("header__nav__details__top-link--open");
  detailsDropdown.classList.toggle("header__nav__details__dropdown--open");
});

detailsDropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    detailsDropdownButton.classList.remove("dropdown-button--open");
    detailsDropdownTop.classList.remove("header__nav__details__top--open");
    detailsNavLink.classList.remove("header__nav__details__top-link--open");
    detailsDropdown.classList.remove("header__nav__details__dropdown--open");
  });
});

compareNavLink.addEventListener("click", () => {
  page.classList.add("page--overflow");
  compare.classList.add("compare--open");
});

compareButton.addEventListener("click", () => {
  page.classList.remove("page--overflow");
  compare.classList.remove("compare--open");
  compareDropdownListFirst.classList.remove("compare__dropdown__list--open");
  compareDropdownListLast.classList.remove("compare__dropdown__list--open");
  compareDropdownTopFirst.classList.remove("compare__dropdown__top--open");
  compareDropdownTopLast.classList.remove("compare__dropdown__top--open");
  compareDropdownButtonFirst.classList.remove("dropdown-button--open");
  compareDropdownButtonLast.classList.remove("dropdown-button--open");
});

compareDropdownButtonFirst.addEventListener("click", (event) => {
  compareDropdownButtonFirst.classList.toggle("dropdown-button--open");
  compareDropdownListFirst.classList.toggle("compare__dropdown__list--open");
  compareDropdownTopFirst.classList.toggle("compare__dropdown__top--open");
});

compareDropdownButtonLast.addEventListener("click", (event) => {
  compareDropdownButtonLast.classList.toggle("dropdown-button--open");
  compareDropdownListLast.classList.toggle("compare__dropdown__list--open");
  compareDropdownTopLast.classList.toggle("compare__dropdown__top--open");
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

clickPageDeletedClasses(
  {
    el: detailsDropdownButton,
    className: "dropdown-button--open",
  },
  {
    el: detailsDropdownTop,
    className: "header__nav__details__top--open",
  },
  {
    el: detailsNavLink,
    className: "header__nav__details__top-link--open",
  },
  { el: detailsDropdown, className: "header__nav__details__dropdown--open" }
);

let sporty4Cost = 2549;
let cowboy4STCost = 3424;
let agileRide3Cost = 2249;

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
const agileRide3 = {
  id: "3",
  type: "electric",
  name: "Agile ride",
  version: 3,
  cost: `$ ${agileRide3Cost}`,
  color: ["grey"],
  material: "titan",
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

compareDropdownListFirst.addEventListener("click", (event) => {
  const targetElement = event.target.closest("[data-product-id]");

  if (targetElement) {
    const productId = targetElement.dataset.productId;
    compareDropdownButtonFirst.classList.toggle("dropdown-button--open");
    compareDropdownListFirst.classList.toggle("compare__dropdown__list--open");
    compareDropdownTopFirst.classList.toggle("compare__dropdown__top--open");

    let firstBike = {};

    if (productId === "sporty-4") {
      firstBike = sporty4;
    } else if (productId === "cowboy-4-st") {
      firstBike = cowboy4ST;
    } else if (productId === "agile-ride-3") {
      firstBike = agileRide3;
    } else {
      console.log("no bike!");
    }

    compareChoseBikeFirst.textContent = `${firstBike.name} ${firstBike.version}`;

    compareCardFirst.innerHTML = `
        <div
          class="compare__card-img compare__card-img--first bikes__card--img--${firstBike.id}"
        ></div>
        <h3 class="compare__card-title">${firstBike.name}</h3>
        <div class="compare__card-tth">
          <ul class="tth__list">
            <li class="tth__item">Cost: ${firstBike.cost}</li>
            <li class="tth__item">Type: ${firstBike.type}</li>
            <li class="tth__item">Version: ${firstBike.version}</li>
            <li class="tth__item">Material: ${firstBike.material}</li>
            <li class="tth__item">Lengt: ${firstBike.lengt}</li>
            <li class="tth__item">Height: ${firstBike.height}</li>
            <li class="tth__item">Width: ${firstBike.width}</li>
            <li class="tth__item">Weight: ${firstBike.weight}</li>
            <li class="tth__item">Diameter wheels: ${firstBike.diameterWheels}</li>
            <li class="tth__item">Width front wheel: ${firstBike.widthFrontWheel}</li>
            <li class="tth__item">Width back wheel: ${firstBike.widthBackWheel}</li>
            <li class="tth__item">Speedometer: ${firstBike.speedometer}</li>
            <li class="tth__item">Number speed gears: ${firstBike.numberSpeedGears}</li>
            <li class="tth__item">Engine: ${firstBike.electricEngine}</li>
            <li class="tth__item">Engine power: ${firstBike.enginePower}</li>
            <li class="tth__item">Gyroscope: ${firstBike.gyroscope}</li>
            <li class="tth__item">Battery capacity: ${firstBike.batteryCapacity}</li>
            <li class="tth__item">Travel range: ${firstBike.travelRange}</li>
            <li class="tth__item">Max speed: ${firstBike.maxSpeed}</li>
            <li class="tth__item">Max load: ${firstBike.maxLoad}</li>
            <li class="tth__item">Head light: ${firstBike.headLight}</li>
            <li class="tth__item">Release year: ${firstBike.releaseYear}</li>
          </ul>
        </div>
      `;
  }
});

compareDropdownListLast.addEventListener("click", (event) => {
  const targetElement = event.target.closest("[data-product-id]");

  if (targetElement) {
    const productId = targetElement.dataset.productId;
    compareDropdownButtonLast.classList.toggle("dropdown-button--open");
    compareDropdownListLast.classList.toggle("compare__dropdown__list--open");
    compareDropdownTopLast.classList.toggle("compare__dropdown__top--open");

    let lastBike = {};

    if (productId === "sporty-4") {
      lastBike = sporty4;
    } else if (productId === "cowboy-4-st") {
      lastBike = cowboy4ST;
    } else if (productId === "agile-ride-3") {
      lastBike = agileRide3;
    } else {
      console.log("no bike!");
    }

    compareChoseBikeLast.textContent = `${lastBike.name} ${lastBike.version}`;

    compareCardLast.innerHTML = `
        <div
          class="compare__card-img compare__card-img--last bikes__card--img--${lastBike.id}"
        ></div>
        <h3 class="compare__card-title">${lastBike.name}</h3>
        <div class="compare__card-tth">
          <ul class="tth__list">
            <li class="tth__item">Cost: ${lastBike.cost}</li>
            <li class="tth__item">Type: ${lastBike.type}</li>
            <li class="tth__item">Version: ${lastBike.version}</li>
            <li class="tth__item">Material: ${lastBike.material}</li>
            <li class="tth__item">Lengt: ${lastBike.lengt}</li>
            <li class="tth__item">Height: ${lastBike.height}</li>
            <li class="tth__item">Width: ${lastBike.width}</li>
            <li class="tth__item">Weight: ${lastBike.weight}</li>
            <li class="tth__item">Diameter wheels: ${lastBike.diameterWheels}</li>
            <li class="tth__item">Width front wheel: ${lastBike.widthFrontWheel}</li>
            <li class="tth__item">Width back wheel: ${lastBike.widthBackWheel}</li>
            <li class="tth__item">Speedometer: ${lastBike.speedometer}</li>
            <li class="tth__item">Number speed gears: ${lastBike.numberSpeedGears}</li>
            <li class="tth__item">Engine: ${lastBike.electricEngine}</li>
            <li class="tth__item">Engine power: ${lastBike.enginePower}</li>
            <li class="tth__item">Gyroscope: ${lastBike.gyroscope}</li>
            <li class="tth__item">Battery capacity: ${lastBike.batteryCapacity}</li>
            <li class="tth__item">Travel range: ${lastBike.travelRange}</li>
            <li class="tth__item">Max speed: ${lastBike.maxSpeed}</li>
            <li class="tth__item">Max load: ${lastBike.maxLoad}</li>
            <li class="tth__item">Head light: ${lastBike.headLight}</li>
            <li class="tth__item">Release year: ${lastBike.releaseYear}</li>
          </ul>
        </div>
      `;
  }
});
