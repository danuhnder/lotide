const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [3, 4] for [0, 1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5, 6, 7]), [3, 4]);
  });
  it("returns [4] for [0, 1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]);
  });
  it("returns an empty array for [0, 1]", () => {
    assert.deepEqual(middle([0, 1]), []);
  });
});

