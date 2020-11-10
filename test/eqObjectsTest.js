const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe('#eqObjects', () => {
  it(`returns true when given the objects { a: "1", b: "2" } and { b: "2", a: "1" }`, () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true)
  });
  it(`returns false when given the objects { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }`, () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false)
  });
  it(`returns true when given the objects { c: "1", d: { d: 4, 3: 'spade'} } and { d: ["2", { d: 4, 3: 'spade'}], c: "1" }`, () => {
    assert.equal(eqObjects({ c: "1", d: ["2", { d: 4, 3: 'spade'}] }, { d: ["2", { d: 4, 3: 'spade'}], c: "1" }), true)
  });
  it(`returns false when given the objects { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }`, () => {
    assert.equal(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false)
  });
})

