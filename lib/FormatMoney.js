import React from "react";

export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  };
  if (amount % 1000 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 100);
}
