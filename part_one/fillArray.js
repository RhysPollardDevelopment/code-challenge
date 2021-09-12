const fillArray = (rawData, currentWeek) => {
  // your code here
  let sorted = rawData.sort(function (a, b) {
    return a.week - b.week;
  });

  const dictionary = Object.fromEntries(sorted.map((x) => [x.week, x.hours]));
  let result = [];
  for (let week = 1; week <= currentWeek; week++) {
    if (dictionary[week]) {
      result.push(dictionary[week]);
    } else {
      result.push(0);
    }
  }

  return result;
};

// Example simple test case
const source = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result = fillArray(source, 3);
console.group("Set1");
console.log("result ==>", result);
console.log("target ==>", [17, 7, 44]);
console.groupEnd();

// Example more advanced test case
const source1 = [
  { week: 5, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result1 = fillArray(source1, 8);
console.group("Set2");
console.log("result ==>", result1);
console.log("target ==>", [0, 7, 44, 0, 17, 0, 0, 0]);
console.groupEnd();

module.exports = { fillArray };
