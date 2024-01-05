function titleCase(word) {
  let newArr = word.toLowerCase().split(" ");
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
  }
  return newArr.join(" ");
}

module.exports = titleCase;
