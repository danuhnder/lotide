const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const sentence = ['hey', 'hey', 'youse', 'guyses'];
console.log(tail(sentence));
assertEqual(sentence.length, 4);
console.log(tail([]));
console.log(tail([14]));
