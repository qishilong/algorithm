const { reverse } = require("./../../notes/tools/翻转数组.js");
const { removeExtraSpace } = require("./../../notes/tools/去除字符串数组多余的空格.js");

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s || s.length === 1 || s === " ") {
    return s;
  }

  const strArr = Array.from(s);
  removeExtraSpace(strArr);

  if (!strArr.join("")) {
    return s;
  }

  // 先对整个字符串翻转一遍
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;
  // 再对各个单词进行翻转
  for (let i = 0, len = strArr.length; i <= len; i++) {
    if (strArr[i] === " " || i === len) {
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }
  return strArr.join("");
};

const s = "  hello world  ";
const result = reverseWords(s);
console.log(result);
