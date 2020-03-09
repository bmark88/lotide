const assertEqual = require('./assertEqual');

const head = (givenArray) => {
  if (givenArray.length >= 1) {
    return givenArray[0];
  } else {
    return undefined;
  }
};

// TEST CODE FOR HEAD FUNCTION
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);

module.exports = head;