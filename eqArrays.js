// const eqObjects = require('./eqObjects');

const eqObjects = function(object1, object2) {
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;
  if (object1Length === object2Length) {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])){
          return false;
        }
      } else if (typeof object1[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const eqArrays = function (array1, array2) {
  const eqObjects2 = eqObjects
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])){
        if (!eqArrays(array1[i], array2[i])) {
          return false;
        }
      } else if (typeof array1[i] === 'object' && typeof array2[i] === 'object') {
        if (!eqObjects2(array1[i], array2[i])) {
          return false;
        }
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = eqArrays;