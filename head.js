const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

console.log(head([3,5,7,9]));
console.log(head(['leprechaun', 'bunny', 'tiger']));
console.log(head([3]));
console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 8, 9]), 5);
assertEqual(head([true, false, false]), false);
