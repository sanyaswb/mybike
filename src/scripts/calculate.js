"use strict";

import { COLOR_GREEN, COLOR_RED, COLOR_TRANSPARENT } from "./config.js";

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

export { calculatePercentages, decideColors };
