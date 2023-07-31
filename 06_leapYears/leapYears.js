
const leapYears = function(endYear, testYear) {
  const leapYearsArray = [];
  let leapStepper;
  for (let index = 0; index < endYear; index = index + 4) {
    // leapStepper += 4;
    leapYearsArray.push(index);
  }
  console.log(leapYearsArray);
  console.log(`Is ${testYear} a leapyear? : ${leapYearsArray.includes(testYear)}`);
};

leapYears(400, 200);
// Do not edit below this line
module.exports = leapYears;
