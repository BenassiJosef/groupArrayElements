const group = require("./groupArrayElements");

test("groupArrayElements throws error if not passed array as first argument ", () => {
  expect(() => {
    group.groupArrayElements("");
  }).toThrow("Please provide an array");
});
test("groupArrayElements throws error if sub array split amount is greater than array length ", () => {
  expect(() => {
    group.groupArrayElements([1, 2, 3])(4);
  }).toThrow("Subarrays must not exceed array length");
});

test("groupArrayElements", () => {
  expect(group.groupArrayElements([1, 2, 3, 4, 5])(3)).toEqual([
    [1, 2],
    [3, 4],
    [5],
  ]);
});
