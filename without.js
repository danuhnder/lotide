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

const without = function(source, itemsToRemove) {
  const cleanedSource = [];
  for (let i = 0; i < source.length; i++) {
    let removeMe;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeMe = true;
      }
    }
    if (!removeMe) {
      cleanedSource.push(source[i]);
    }
  }
  return cleanedSource;
};
const stuffIFoundInTheFruitBasket = ["pear", "ruby", "apple", "squash"];
const notAFruit = ["ruby", "diamond"];
assertArraysEqual(without(stuffIFoundInTheFruitBasket, notAFruit),["pear", "apple", "squash"]);
console.log(stuffIFoundInTheFruitBasket);

module.exports = without;