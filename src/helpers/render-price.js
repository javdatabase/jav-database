function priceCurrency(price) {
  const number = price.toString().split(".");
  let response = number[0]
    .split("")
    .reverse()
    .join("");
  response = response.replace(/\d\d\d(?!$)/g, "$&,");
  response = response
    .split("")
    .reverse()
    .join("");
  return response;
}

export { priceCurrency };
