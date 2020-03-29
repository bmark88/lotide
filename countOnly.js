const { assertEqual } = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let nameCount = {};

  for (let name in itemsToCount) {
    let truthValue = itemsToCount[name];

    if (truthValue && allItems.includes(name)) {
      nameCount[name] = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === name) {
          nameCount[name] += 1;
        }
      }
    }
  }

  return nameCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
});

assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);

module.exports = { countOnly };