// checks that both args are positive numbers
// works if the larger number starts first

const sumAll = (min, max) => {
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
