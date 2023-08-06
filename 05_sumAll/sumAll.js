const sumAll = function (small, large) {
  if (!Number.isInteger(small) || !Number.isInteger(large)) return "ERROR";
  if (small < 0 || large < 0) return "ERROR";
  if (small > large) {
    let temp = small;
    small = large;
    large = temp;
  }
  let total = 0;
  for (let i = small; i <= large; i++) {
    total += i;
  }
  return total;
}

// Do not edit below this line
module.exports = sumAll;
