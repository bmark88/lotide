const { eqArrays } = require('./eqArrays');
const { assertArraysEqual } = require('./assertArraysEqual');

//TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

const letterPositions = (sentence) => {
  const results = {};

  for (let letterIndex in sentence) {
    if (!results[sentence[letterIndex]]) {
      results[sentence[letterIndex]] = [Number(letterIndex)];
    } else {
      results[sentence[letterIndex]].push(Number(letterIndex));
    }
  }
  delete results[' '];

  return results;
};

// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;