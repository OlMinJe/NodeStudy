const { odd, even } = require("./var");

const checkNumber = (num) => {
  if (num % 2) return odd;
  else return even;
};

module.exports = checkNumber;

// module.export === exports === {}; // JS는 값이 아닌 참조로 개체를 비교하므로 이 조건은 항상 false를 반환
