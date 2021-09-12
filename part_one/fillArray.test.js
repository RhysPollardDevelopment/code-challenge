const { fillArray } = require("./fillArray");

describe("Fill array tests", () => {
  test("SHould orgnanise and fill hours array", () => {
    const hours = [
      { week: 5, hours: 17 },
      { week: 3, hours: 44 },
      { week: 2, hours: 35 },
      { week: 7, hours: 22 },
      { week: 10, hours: 19 },
      { week: 11, hours: 6 },
      { week: 8, hours: 20 },
    ];

    const result = fillArray(hours, 12);

    const expected = [0, 35, 44, 0, 17, 0, 22, 20, 0, 19, 6, 0];

    expect(result).toEqual(expected);
  });
});
