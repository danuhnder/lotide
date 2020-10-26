const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Dan", "best looking dude");
assertEqual(true, true);
assertEqual(true, false);
assertEqual('abcd', 'abcd');
assertEqual('abcd', 'ABCD');
assertEqual(22, 22);
assertEqual(22.0, 22.00);