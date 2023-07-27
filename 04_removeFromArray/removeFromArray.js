const mainArray = [0, 4, 2, 1, 8, 9, 20, 12, 7];
const numsToRemove = [1, 3, 4, 5];


// const removeFromArray = function(array, ...nums) {
//   console.log(array)
// };
// removeFromArray();

const addNums = function (...toAdd) {
  let finalNum = 0;
  for (const num of toAdd) {
    finalNum += num;
  }
  return finalNum;
}

console.log(addNums(1, 3, 2)); // should print '6'

// Do not edit below this line
// module.exports = removeFromArray;
