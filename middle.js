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

module.exports = middle;

