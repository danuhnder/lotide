const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 } for "hello there"', () => {
    assert.deepEqual(countLetters('hello there'), { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 });
  });
  it('returns { g: 1, e: 3, n: 2, r: 1, a: 1, l: 1, k: 1, o: 1, b: 1, i: 1 } for "general kenobi"', () => {
    assert.deepEqual(countLetters('general kenobi'), { g: 1, e: 3, n: 2, r: 1, a: 1, l: 1, k: 1, o: 1, b: 1, i: 1 });
  });
});
