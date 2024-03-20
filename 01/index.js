const { odd, even } = require("./var");
const checkNumber = require("./func");

const checkStringOddOrEven = (str) => {
  if (str.length % 2) return odd;
  else even;
};

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
