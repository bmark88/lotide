const { assertEqual } = require('./assertEqual');
const { eqArrays } = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const keysObject1Array = Object.keys(object1);
  const keysObject2Array = Object.keys(object2);

  if (keysObject1Array.length !== keysObject2Array.length) {
    return false;
  }

  for (let key of keysObject1Array) {
    let v1 = object1[key];
    let v2 = object2[key];

    if (Array.isArray(v1) && Array.isArray(v2)) {
      
      if (!eqArrays(v1, v2)) {
        return false;
      }
    } else {
      if (v1 !== v2) {
        return false;
      }
    }
  }

  return true;
};

// const ab = {
//   a: "1",
//   b: "2"
// };

// const ba = {
//   b: "2",
//   a: "1"
// };
// console.log(eqObjects(ab, ba)); // => true

// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// };
// console.log(eqObjects(ab, abc)); // => false


// //ARRAYS TEST
// const cd = {
//   c: "1",
//   d: ["2", 3]
// };

// const dc = {
//   d: ["2", 3],
//   c: "1"
// };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = {
//   c: "1",
//   d: ["2", 3, 4]
// };
// console.log(eqObjects(cd, cd2)); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

module.exports = { eqObjects };