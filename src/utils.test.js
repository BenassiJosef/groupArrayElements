const utils = require("./utils");

test("checkIfPositiveInt returns correct boolean ", () => {
  const one = 1;
  const zero = 0;
  const negativeOne = -1;
  const string = "";
  expect(utils.checkIfPositiveInt(one)).toBe(true);
  expect(utils.checkIfPositiveInt(zero)).toBe(false);
  expect(utils.checkIfPositiveInt(negativeOne)).toBe(false);
  expect(utils.checkIfPositiveInt(string)).toBe(false);
});

test("getRemainder", () => {
  //4 modulo 5 i.e 4%5 = 4
  expect(utils.getRemainder(4, 5)).toBe(4);
});

test("getRemainder thorws error ", () => {
  expect(() => {
    utils.getRemainder("2", "2");
  }).toThrow(
    "hasRemainder function must be provided with two number arguments"
  );
});

test("lastElementArrayIsLengthOfRemainder thorws error if not array argument", () => {
  expect(() => {
    utils.lastElementArrayIsLengthOfRemainder("test", 1);
  }).toThrow("Please provide an array");
});

test("lastElementArrayIsLengthOfRemainder thorws error if not array has no length", () => {
  expect(() => {
    utils.lastElementArrayIsLengthOfRemainder([], 1);
  }).toThrow("Array is empty");
});

test("lastElementArrayIsLengthOfRemainder thorws error if not array elements are not sub arrays", () => {
  expect(() => {
    utils.lastElementArrayIsLengthOfRemainder(["test", "test2"], 1);
  }).toThrow(
    "lastElementArrayIsLengthOfRemainder array arguments should contain sub arrays as elements"
  );
});

test("lastElementArrayIsLengthOfRemainder returns array if last array elements is same length as remainder value", () => {
  expect(
    utils.lastElementArrayIsLengthOfRemainder([[1, 2], [3, 4], [5]], 1)
  ).toEqual([[1, 2], [3, 4], [5]]);
});

test("lastElementArrayIsLengthOfRemainder returns array if last array elements is same length as remainder value", () => {
  expect(
    utils.lastElementArrayIsLengthOfRemainder([[1, 2], [3, 4], [5]], 4)
  ).toEqual([
    [1, 2],
    [3, 4],
    [5, 0, 0, 0],
  ]);
});
