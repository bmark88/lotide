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


const middle = (givenArray) => {

  // Returns empty array if length of array is 2 or less
  if (givenArray.length === 1 || givenArray.length === 2) {
    return [];
  } else {
    const halfLengthValue = Math.floor(givenArray.length / 2);

    //Returns only 1 middle value for odd number length arrays
    if (givenArray.length % 2 !== 0) {
      return [givenArray[halfLengthValue]];
    }
    //Returns 2 values for even number length arrays
    else {
      return givenArray.slice(halfLengthValue - 1, halfLengthValue + 1);
    }
  }
};


// 1 or 2 Length test
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

// // Odd test
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// // Even test
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// // 1 or 2 Length test
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// // Odd test
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// // Even test
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]