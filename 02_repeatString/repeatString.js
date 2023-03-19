const repeatString = function(string, mult) {
  if (mult < 0) return "ERROR"; // from the solution (throw error if neg num)
  let newstring = '';
  for (let i = 0; i < mult; i++) {
    newstring += string;
  }
  return newstring;
};

// Do not edit below this line
module.exports = repeatString;
