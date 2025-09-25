const page = document.querySelector(".page");
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");
const menuOpen = document.querySelector(".icon--menu");
const menuClose = document.querySelector(".icon--close");
const detailImages = document.querySelectorAll(".detail__images");
const detailImage = document.querySelectorAll(".detail__image");

const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown__item");

const detailsDropdownTop = document.getElementById("detailsDropdownTop");
const detailsNavLink = document.getElementById("detailsNavLink");
const detailsDropdownButton = document.getElementById("detailsDropdownButton");
const detailsDropdown = document.getElementById("detailsDropdown");
const detailsDropdownLinks = document.querySelectorAll(
  ".dropdown__details__link"
);

const compareNavLink = document.getElementById("compareNavLink");
const compare = document.getElementById("compare");
const compareButton = document.getElementById("compareButton");
const compareDropdownButtonFirst = document.getElementById(
  "compareDropdownButtonFirst"
);
const compareDropdownButtonLast = document.getElementById(
  "compareDropdownButtonLast"
);
const compareDropdownFirst = document.getElementById("compareDropdownFirst");
const compareDropdownLast = document.getElementById("compareDropdownLast");
const compareChoseBikeFirst = document.getElementById("compareChoseBikeFirst");
const compareChoseBikeLast = document.getElementById("compareChoseBikeLast");
const compareDropdownTopFirst = document.getElementById(
  "compareDropdownTopFirst"
);
const compareDropdownTopLast = document.getElementById(
  "compareDropdownTopLast"
);

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
const dropdownMaxWidth = getMaxWidth();
dropdown.style.maxWidth = dropdownMaxWidth;

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
});

compareDropdownButtonFirst.addEventListener("click", (event) => {
  compareDropdownButtonFirst.classList.toggle("dropdown-button--open");
  compareDropdownFirst.classList.toggle("compare__dropdown__list--open");
  compareDropdownTopFirst.classList.toggle("compare__dropdown__top--open");
});

compareDropdownButtonLast.addEventListener("click", (event) => {
  compareDropdownButtonLast.classList.toggle("dropdown-button--open");
  compareDropdownLast.classList.toggle("compare__dropdown__list--open");
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
  { el: detailsDropdownTop, className: "header__nav__details__top--open" },
  {
    el: detailsNavLink,
    className: "header__nav__details__top-link--open",
  },
  { el: detailsDropdown, className: "header__nav__details__dropdown--open" }
  // { el: compareDropdownFirst, className: "compare__dropdown__list--open" },
  // { el: compareDropdownLast, className: "compare__dropdown__list--open" }
  // { el: compareDropdownTopFirst, className: "compare__dropdown__top--open" },
  // { el: compareDropdownTopLast, className: "compare__dropdown__top--open" }
);
