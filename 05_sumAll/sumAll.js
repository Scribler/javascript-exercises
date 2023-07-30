const sumAll = function(x, y) {
  let finalNum = 0;
  let firstNum;
  let secondNum;
  if (typeof x !== 'number'|| typeof y !== 'number') {
    console.log("ERROR");
    return "ERROR";
  }

  if (x > y && x >= 0 && y >= 0) {
    firstNum = y;
    secondNum = x;
  } else if (x < y && x >= 0 && y >= 0) {
    firstNum = x;
    secondNum = y;
  } else {
    finalNum = "ERROR";
  }

  for (let i = firstNum; i <= secondNum; i++) {
    (finalNum !== "ERROR") ? finalNum += i : console.log("error");
  }
console.log(finalNum);
return finalNum;
};




sumAll(3, 1);
sumAll(1, 3);
sumAll(1, "3");
sumAll(1, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
