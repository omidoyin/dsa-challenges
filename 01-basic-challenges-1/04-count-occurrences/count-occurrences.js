function countOccurrences(str, char) {
  let arrStr = str.replace(/ /, "").split("");
  let count = 0;
  arrStr.map((ele, i) => {
    if (ele.toLowerCase() === char.toLowerCase()) {
      count++;
    }
  });
  return count;
}

module.exports = countOccurrences;
