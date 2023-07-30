const mainArray = [1, 2, 3, 4];

const removeFromArray = function(array, ...toRemove) {
  const arrayToReturn = array;

  console.log(mainArray); // show starting array
  console.log(`toRemove(array of items to remove): ${toRemove}`); // show items to delete

  for (const removeThis of toRemove) { // loop through items and remove from array
    let itemIndex = array.indexOf(removeThis);
    if (itemIndex >= 0) arrayToReturn.splice(itemIndex, 1);
  }
  console.log(arrayToReturn);
  return arrayToReturn;
};

// removeFromArray(mainArray, 11, "nachos");


// Do not edit below this line
module.exports = removeFromArray;
