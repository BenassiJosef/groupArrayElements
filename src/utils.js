function checkIfPositiveInt(integer) {
  if (Number.isInteger(integer) && integer > 0) {
    return true;
  }
  return false;
}

function getRemainder(dividend, divisor) {
  if (
    Number.isInteger(dividend) === false ||
    Number.isInteger(divisor) === false
  ) {
    throw new Error(
      "hasRemainder function must be provided with two number arguments"
    );
  }
  return dividend % divisor;
}

function lastElementArrayIsLengthOfRemainder(arrayOfSubArrays, remainder) {
  if (!Array.isArray(arrayOfSubArrays)) {
    throw new Error("Please provide an array");
  }
  if (arrayOfSubArrays.length === 0) {
    throw new Error("Array is empty");
  }

  const immutableArray = [...arrayOfSubArrays];
  //check if each element is an array
  immutableArray.forEach((element) => {
    if (!Array.isArray(element)) {
      throw new Error(
        "lastElementArrayIsLengthOfRemainder array arguments should contain sub arrays as elements"
      );
    }
  });

  const lastElement = immutableArray[immutableArray.length - 1];
  if (remainder === 0 || remainder === lastElement.length) {
    return arrayOfSubArrays;
  }

  const padding = remainder - lastElement.length;

  for (i = padding; i > 0; i--) {
    lastElement.push(0);
  }
  const newArray = immutableArray.splice(lastElement);
  // recursion as we already have base case if length matches remainder so we can call again
  return lastElementArrayIsLengthOfRemainder(newArray, remainder);
}

module.exports = {
  checkIfPositiveInt,
  getRemainder,
  lastElementArrayIsLengthOfRemainder,
};
