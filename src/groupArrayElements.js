const utils = require("./utils");

function groupArrayElements(array) {
  // first check edge cases
  if (!Array.isArray(array)) {
    throw new Error("Please provide an array");
  }
  return function (numberOfSubArrays) {
    if (!utils.checkIfPositiveInt(numberOfSubArrays)) {
      throw new Error("Please provide a number larger than zero");
    }

    if (numberOfSubArrays > array.length) {
      throw new Error("Subarrays must not exceed array length");
    }

    const immutableArray = [...array];
    const arrayIndicies = immutableArray.length - 1;
    const remainder = utils.getRemainder(arrayIndicies, numberOfSubArrays);
    const groupedArrayElements = [];
    for (let i = numberOfSubArrays; i > 0; i--) {
      groupedArrayElements.push(
        immutableArray.splice(0, Math.ceil(immutableArray.length / i))
      );
    }
    return utils.lastElementArrayIsLengthOfRemainder(
      groupedArrayElements,
      remainder
    );
  };
}

module.exports = {
  groupArrayElements,
};
