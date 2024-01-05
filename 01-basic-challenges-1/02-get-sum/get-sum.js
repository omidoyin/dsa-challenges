function getSum(a, b) {
  if (!(typeof a == "number" && typeof b == "number")) {
    return " not a number";
  } else {
    return a + b;
  }
}

module.exports = getSum;
