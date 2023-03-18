const repeatString = function(string, mult) {
  let newstring = '';
  for (let i = 0; i < mult; i++) {
    newstring += string;
  }
  return newstring;
};

// Do not edit below this line
module.exports = repeatString;
