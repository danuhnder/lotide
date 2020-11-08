const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe('#eqArrays', () => {
  it(`returns false when given the arrays [1, 2, 3] and [3, 2, 1]`, () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false)
  });
  it(`returns true when given the arrays [1, 2, 3] and [1, 2, 3]`, () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  it(`returns true when given the arrays ["1", "2", "3"] and ["1", "2", "3"]`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
  });
  it(`returns false when given the arrays ["1", "2", "3"] and ["1", "2", 3]`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
  });
})


