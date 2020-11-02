const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      const subject = string[i]
      if (results[subject]) {
        results[subject].push(i)
      } else {
        results[subject] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;

console.log(letterPositions("hello there"));
console.log(letterPositions("general kenobi"));
console.log(letterPositions("lighthouse in the house"));