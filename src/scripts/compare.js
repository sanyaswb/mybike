"use strict";

// engine-create-js(compare)
// engine-import(this)
// engine-import-generated
import { calculatePercentages, decideColors } from "./calculate.js";
import {
  compare,
  compareBarFirst,
  compareBarLast,
  compareButton,
  compareCardFirst,
  compareCardLast,
  compareCardTth,
  compareChoseBikeFirst,
  compareChoseBikeLast,
  compareDropdowEventLast,
  compareDropdownButtonFirst,
  compareDropdownButtonLast,
  compareDropdownEventFirst,
  compareDropdownListFirst,
  compareDropdownListLast,
  compareDropdownTopFirst,
  compareDropdownTopLast,
  compareLists,
  compareOpen,
  firstBarProcent,
  lastBarProcent,
  menu,
  page,
} from "./dom.js";
import { getProductsMaxWeights } from "./normalization.js";
import { getProp } from "./utilities.js";
import { products, propertiesToCompare, weights } from "./data.js";

let selectedFirstBike = {};
let selectedLastBike = {};
let weightsFirstBike = {};
let weightsLastBike = {};
let firstBikeScore = 0;
let lastBikeScore = 0;

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
