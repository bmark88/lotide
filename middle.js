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

module.exports = middle;