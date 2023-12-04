/**
 * 移除字符串数组多余的空格
 * @param {*} strArr 字符串数组
 */
const removeExtraSpace = (strArr) => {
  let length = strArr.length;

  // 定义快慢指针
  let fast = 0,
    slow = 0;

  while (fast < length) {
    if (strArr[fast] === " " && (fast === 0 || strArr[fast - 1] === " ")) {
      fast++;
    } else {
      strArr[slow++] = strArr[fast++];
    }
  }
  strArr.length = strArr[slow - 1] === " " ? slow - 1 : slow;
};

module.exports = {
  removeExtraSpace
};
