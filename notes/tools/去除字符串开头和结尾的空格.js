/**
 * 去除字符串开头和结尾的空格
 * @param {*} str 目标字符串
 * @return {*} string 返回移除空格后字符串
 */
const removeStartAndEndSpace = (str) => {
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left] === " ") {
      left++;
    } else if (str[right] === " ") {
      right--;
    } else {
      break;
    }
  }
  return str.substring(left, right + 1);
};
