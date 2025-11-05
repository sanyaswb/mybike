"use strict";

// engine-create-js(utilities)
// engine-import(this)
// engine-import-generated
import { compare, compareDropdownButtonFirst, compareDropdownButtonLast, compareDropdownListFirst, compareDropdownListLast, compareDropdownTopFirst, compareDropdownTopLast, detailsDropdown, detailsDropdownButton, detailsDropdownTop, page } from './dom.js';



function turnOffHover() {
  if (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  ) {
    document.body.classList.add("touch-device");
  } else {
    return;
  }
}

turnOffHover();

function getProp(bike, prop) {
  return bike?.[prop] ?? "---";
}

function handleClickOutside(containerElement, ...targets) {
  containerElement.addEventListener("click", (event) => {
    const clickedInside = targets.some(({ el }) => {
      return el.contains(event.target);
    });

    if (clickedInside) return;

    for (const { el, className } of targets) {
      el.classList.remove(className);
    }
  });
}

handleClickOutside(
  page, // <- Елемент-контейнер
  { el: detailsDropdownButton, className: "dropdown-button--open" },
  { el: detailsDropdownTop, className: "header__details-top--open" },
  { el: detailsDropdown, className: "header__details-dropdown--open" }
);

handleClickOutside(
  compare, // <- Елемент-контейнер
  { el: compareDropdownButtonFirst, className: "dropdown-button--open" },
  { el: compareDropdownListFirst, className: "compare__dropdown-list--open" },
  { el: compareDropdownTopFirst, className: "compare__dropdown-top--open" },
  { el: compareDropdownButtonLast, className: "dropdown-button--open" },
  { el: compareDropdownListLast, className: "compare__dropdown-list--open" },
  { el: compareDropdownTopLast, className: "compare__dropdown-top--open" }
);

export {
  getProp
};
