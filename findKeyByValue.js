const { assertEqual } = require('./assertEqual');

const findKeyByValue = (givenObject, givenValue) => {
  for (let value in givenObject) {
    if (givenValue === givenObject[value]) {
      return value;
    }
  }
};

//Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;