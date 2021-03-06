const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual')

describe('#tail', () => {
  it("should return ['Lighthouse', 'Labs'] when given the array ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

// TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!