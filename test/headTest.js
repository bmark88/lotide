const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1,2,3,]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

// TEST CODE FOR HEAD FUNCTION
// console.log(head([5,6,7]));
// console.log(head(["Hello", "Lighthouse", "Labs"]));
// console.log(head([]));