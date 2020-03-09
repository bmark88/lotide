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


const flatten = (givenArray) => {
  let flattenedArray = [];

  for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i].length >= 0) {
      for (let j = 0; j < givenArray[i].length; j++) {
        flattenedArray.push(givenArray[i][j]);
      }
    } else {
      flattenedArray.push(givenArray[i]);
    }
  }

  return flattenedArray;
};

//Test code
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]