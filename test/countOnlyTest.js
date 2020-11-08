const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it(`returns the object {1: 4} when given the array [1, 1, 1, 1] and object {1: true}`, () => {
    assert.deepEqual(countOnly([1, 1, 1, 1], {1: true}), { 1: 4});
  });
  it(`returns the object {1: 4, 3: 2} when given the array [1, 2, 3, 4, 1, 2, 3, 1, 2, 1] and object {1: true, 2: false, 3: true, 4: null}`, () => {
    assert.deepEqual(countOnly([1, 2, 3, 4, 1, 2, 3, 1, 2, 1], {1: true, 2: false, 3: true, 4: null}), {1: 4, 3: 2});
  });
  it(`returns { Jason: 1, Fang: 2 } for ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    assert.deepEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Jason: 1, Fang: 2});
  });
});



