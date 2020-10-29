const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const words = ["hey", "orpheus", "i'm", "behind", "you"];

// const results1 = map(words, word => word[0]);
// console.log(results1); 

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

const tail = function(array) {
  return array.slice(1);
};

assertArraysEqual(map(['chicken', 'fingers', 'pig', 'trotters'], word => word[1]), ['h', 'i', 'i', 'r']);
assertArraysEqual(map([3, 4, 5, 6, 7], num => num * 7), [21, 28, 35, 42, 49]);
assertArraysEqual(map(['chicken', 'fingers', 'pig', 'trotters'], tail), ['hicken', 'ingers', 'ig', 'rotters']);