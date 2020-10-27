const eqArrays = function(array1, array2) {
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
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  if (Array.isArray(array)) {
    const arrayLength = array.length;
    const middleValue = Math.floor(arrayLength / 2);
    const outputArray = [];
    if (arrayLength < 3) {
      return outputArray;
    }
    if (arrayLength % 2 !== 0) {
      outputArray.push(array[middleValue]);
    } else {
      outputArray.push(array[middleValue - 1]);
      outputArray.push(array[middleValue]);
    }
    return outputArray;
  }
};
// TEST CODE
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7]), [3, 4]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]);
assertArraysEqual(middle([0, 1]), []);