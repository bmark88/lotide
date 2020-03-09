// FUNCTION IMPLEMENTATION WITH TEMPLATE LITERALS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.assert(actual === expected, "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


const countLetters = (givenString) => {
  let letterCount = {};
  let noSpaces = givenString.split(' ').join('');

  for (letter of noSpaces) {
    letterCount[letter] = 0;
  }

  for (letter of noSpaces) {
    letterCount[letter]++;
  }

  return letterCount;
};

// console.log(countLetters("lighthouse in the house"));
// assertEqual(countLetters("lighthouse in the house"), ({l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}));

module.exports = countLetters;