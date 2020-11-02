const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letterCount = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;

console.log(countLetters("hello there"));
assertEqual(countLetters("hello there"), { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 });
console.log(countLetters("general kenobi"));
assertEqual(countLetters("general kenobi"), { g: 1, e: 3, n: 2, r: 1, a: 1, l: 1, k: 1, o: 1, b: 1, i: 1 });