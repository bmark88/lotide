const assertEqual = require('./assertEqual');

const tail = (givenArray) => {
  let tailArray = [];

  for (let i = 1; i < givenArray.length; i++) {
    tailArray.push(givenArray[i]);
  }

  return tailArray;
};

module.exports = tail;