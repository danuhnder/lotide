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

