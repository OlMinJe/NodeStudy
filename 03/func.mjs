import { odd, even } from "./var.mjs";

const checkNumber = (num) => {
  if (num % 2) return odd;
  else return even;
};

export default checkNumber;
