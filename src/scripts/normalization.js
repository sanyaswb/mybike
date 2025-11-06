"use strict";

import { buyBtnLeftAll, buyBtnRightAll } from "./dom.js";
import { notWeighed, products, weights } from "./data.js";

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

function normalizeButtonWidth() {
  let arrLeftBtnValue = [];
  let arrRightBtnValue = [];
  let arrLeftBtn = [];
  let arrRightBtn = [];

  buyBtnLeftAll.forEach((btnL) => {
    arrLeftBtnValue.push(`${btnL.offsetWidth}px`);
    arrLeftBtn.push(btnL);
  });

  buyBtnRightAll.forEach((btnR) => {
    arrRightBtnValue.push(`${btnR.offsetWidth}px`);
    arrRightBtn.push(btnR);
  });

  if (arrLeftBtnValue.length === arrRightBtnValue.length) {
    for (let i = 0; i < arrLeftBtnValue.length; i++) {
      if (arrLeftBtnValue[i] > arrRightBtnValue[i]) {
        arrRightBtn[i].style.width = arrLeftBtnValue[i];
      } else {
        arrLeftBtn[i].style.width = arrRightBtnValue[i];
      }
    }
  } else {
    return;
  }
}

normalizeButtonWidth();

export { getProductsMaxWeights };
