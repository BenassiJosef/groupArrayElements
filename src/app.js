const group = require("./groupArrayElements");

try {
  const array = [1, 2, 3, 4, 5];
  const subArraySize = 3;

  const result = group.groupArrayElements(array)(subArraySize);
  console.log(result);
} catch (error) {
  console.log(error);
}
