const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(inputArray) {
  const flattenedArray = [];
  for (let i = 0; i < inputArray.length; i++){
    if (Array.isArray(inputArray[i])) {
      const embeddedArray = inputArray[i];
      for (let j = 0; j < embeddedArray.length; j++) {
        flattenedArray.push(Number(embeddedArray[j]));
      }
    } else {
      flattenedArray.push(Number(inputArray[i]));
    } 
  }
  return flattenedArray; 
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], 7, 5, [2, 6]]));