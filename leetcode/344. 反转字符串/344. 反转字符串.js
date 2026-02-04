const { swapArr } = require("./../../notes/tools/交换.js");

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    swapArr(s, i, j);
  }
  return s;
};

const s = ["h", "e", "l", "l", "o"];
const result = reverseString(s);
console.log(result);
