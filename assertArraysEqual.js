const assertArraysEqual = function(array1, array2) {
  let failCondition = 0;
  if (array1.length !== array2.length) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i] && failCondition === 0) {
        console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
        failCondition = 1;
      }
    }  
  }  
  if (failCondition === 0) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } 
};
    

assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
