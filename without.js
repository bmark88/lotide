const eqArrays = (actual, expected) => {

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

// console.log("X", eqArrays([],[])) // this tests for empty arrays
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:`, actual, " === ", expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, "!==", expected);
  }
};


const without = (source, itemsToRemove) => {
  return source.filter(item => !itemsToRemove.includes(item));
};


//Test Code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]), // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);