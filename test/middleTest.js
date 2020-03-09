const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('#middle', () => {
  it("returns empty array [] if original array length is 1 or 2", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an array with the middle number of a given odd array", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("returns an array with the middle two numbers of a given even array", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});

//TEST CASES
// 1 or 2 Length test
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// console.log((middle([1]), [])); // => []
// console.log((middle([1, 2]), [])); // => []


// // // Odd test
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// // // Even test
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// // 1 or 2 Length test
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// // Odd test
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// // Even test
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]