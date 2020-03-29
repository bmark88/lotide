// FUNCTION IMPLEMENTATION WITH TEMPLATE LITERALS
const { assertEqual } = require('./assertEqual');
const { eqArrays } = require('./eqArrays');
const { eqObjects } = require('./eqObjects');

// //ARRAYS TEST
const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};
// console.log(eqObjects(cd, dc)); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
// console.log(eqObjects(cd, cd2)); // => false

/*******************************************************/
/*******************************************************/

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);

module.exports = { assertObjectsEqual };