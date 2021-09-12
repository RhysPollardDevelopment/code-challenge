const deepCopy = (sourceObj) => {
  // your code here
  let result = {};

  for (let key in sourceObj) {
    const value = sourceObj[key];
    // Checks for primitive types
    if (
      typeof value == "number" ||
      typeof value == "string" ||
      typeof value == "boolean" ||
      typeof value == "function"
    ) {
      result[key] = value;
    } else if (value instanceof Array) {
      result[key] = [];
      for (let item in value) {
        result[key].push(value[item]);
      }
    } else if (value instanceof Date) {
      result[key] = new Date(value);
    } else if (value instanceof RegExp) {
      result[key] = value;
    } else {
      result[key] = deepCopy(value);
    }
  }

  return result;
};

// Example simple test case
const source = {
  a: 1,
  b: "string",
  c: false,
};

const target = deepCopy(source);
console.group("Set1");
console.log("source ==>", source);
console.log("target ==>", target);
console.groupEnd();

// Example more advanced test case
const source1 = {
  a: [1, 2, 3, 4],
  b: {
    c: 1,
    d: 2,
    e: new Date(),
    f: () => console.log("Hello World"),
  },
};
const target1 = deepCopy(source1);
console.group("Set2");
console.log("source ==>", source1);
console.log("target ===>", target1);
console.groupEnd();

// Feel free to show off different style test cases as you see fit

module.exports = { deepCopy };
