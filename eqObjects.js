const eqArrays = require("./eqArrays")

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

module.exports = eqObjects;

console.log(eqObjects({ 
  a: { 
     z: 1, q: { 
              g: 0, k: 3, h: [ 4, 7, 9] 
              }, b: 2 }}, { a: { 
                z: 1, q: { 
                         g: 0, k: 3, h: [ 4, 7, 9] 
                         }, b: 2 }})) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false