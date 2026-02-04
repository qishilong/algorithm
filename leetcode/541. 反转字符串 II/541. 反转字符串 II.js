const { swapArr } = require("./../../notes/tools/交换.js");

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const strArr = s.split("");

  // 每隔 2k 个字符的前 k 个字符进行翻转
  for (let i = 0, len = strArr.length; i < len; i += 2 * k) {
    let left = i - 1,
      right = i + k > len ? len : i + k;
    while (++left < --right) {
      swapArr(strArr, left, right);
    }
  }
  return strArr.join("");
};
const s = "abcdefg",
  k = 2;
const result = reverseStr(s, k);
console.log(result);
