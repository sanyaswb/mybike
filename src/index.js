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

// const linkSporty4 = document.querySelectorAll(`[data-product-id="sporty-4"]`);
// const linkRideInTown = document.querySelectorAll(
//   `[data-product-id="ride-in-town"]`
// );
// const linkAgileRide3 = document.querySelectorAll(
//   `[data-product-id="agile-ride-3"]`
// );

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
    el: details - dropdown - button,
    className: "dropdown-button--open",
  },
  {
    el: details - dropdown - top,
    className: "header__nav__details__top--open",
  },
  {
    el: details - nav - link,
    className: "header__nav__details__top-link--open",
  },
  { el: details - dropdown, className: "header__nav__details__dropdown--open" }
);
