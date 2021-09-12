const { deepCopy } = require("./deepCopy");

describe("Deepcopy testing", () => {
  test("Creates a copy equal to original", () => {
    const original = {
      a: [1, 2, 3, 4],
      b: {
        c: 1,
        d: "2",
        e: new Date(),
        f: () => console.log("Hello World"),
        h: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      },
    };

    const copy = deepCopy(original);
    expect(copy).toEqual(original);
  });

  test("Created copy is not same as original directly", () => {
    const original = {
      a: [1, 2, 3, 4],
      b: {
        c: 1,
        d: "2",
        e: new Date(),
        f: () => console.log("Hello World"),
        h: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      },
    };

    const copy = deepCopy(original);
    expect(copy).not.toBe(original);
  });

  test("Original is not referenced when edited.", () => {
    const original = {
      a: [1, 2, 3, 4],
      b: {
        c: 1,
        d: "2",
        e: new Date(),
        f: () => console.log("Hello World"),
        h: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      },
    };

    const copy = deepCopy(original);

    original.b.c = 50;
    original.b.e = new Date("2021-12-25T00:00:00.000Z");
    expect(copy).not.toEqual(original);
  });
});
