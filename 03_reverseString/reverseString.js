const reverseString = function(string) {
  let reversedString = '';
  let reversedArray = [];
  let stringArray = string.split('');
  for (letter in stringArray){
    reversedArray.unshift(stringArray[letter]);
    reversedString = reversedArray.join('');
  };
  // console.log(stringArray);
  // console.log(reversedString);

  return reversedString;
};

// reverseString('This is a string, to be split')
// Do not edit below this line
module.exports = reverseString;
