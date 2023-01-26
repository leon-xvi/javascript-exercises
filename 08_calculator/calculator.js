const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (input) => {
  if (input.length === 0) {
    return 0;
  } else {
    return input.reduce((acc, current) => acc + current);
  }
};

const multiply = (input) => input.reduce((acc, current) => acc * current);

const power = (a, b) => a ** b;

const factorial = (num) => {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num --;
    result *= num;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
