const { swapArr } = require("./交换.js");

/**
 * 翻转数组
 * @param {*} arr 对象数组
 * @param {*} start 开始下标
 * @param {*} end 结束下标
 */
const reverse = (arr, start, end) => {
  while (start < end) {
    swapArr(arr, start, end);
    start++;
    end--;
  }
};

module.exports = {
  reverse,
};
