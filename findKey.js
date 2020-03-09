// FUNCTION IMPLEMENTATION WITH TEMPLATE LITERALS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // console.assert(actual === expected, "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);



const findKey = (object, callback) => {
  for (let key in object) {
    if (!object[key]) {
      return undefined;
    } else if (callback(object[key])) {
      return key;
    }
  }
};



console.log(findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2)); // => "noma"

console.log(findKey({

}, x => x.stars === 2)); // => "noma"