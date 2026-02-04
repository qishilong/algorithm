/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // 相当于剪枝了
  if (!s || s.length < 4 || s.length > 12) {
    return [];
  }

  const result = []; // 记录结果

  /**
   * @param {*} s
   * @param {*} startIndex  搜索的起始位置
   * @param {*} pointNum  添加逗点的数量
   * @returns
   */
  const backtracking = (s, startIndex, pointNum) => {
    // 当逗点为3时，分割结束，开始判断是否是一个合法的IP地址
    if (pointNum === 3) {
      // 判断第4段子字符串是否合法，如果合法就放进 result 数组中
      if (isValid(s, startIndex, s.length - 1)) {
        result.push(s);
      }
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      // 判断[startIndex, i]这个区间的子串是否合法
      if (isValid(s, startIndex, i)) {
        s = s.slice(0, i + 1) + "." + s.slice(i + 1); // 在 i 的后面插入一个逗点
        pointNum++; // 逗点数量加1
        backtracking(s, i + 2, pointNum); // 插入逗点之后下一个子串的起始位置为 i + 2，因为此时已经添加一个逗点，字符串长度加一
        pointNum--; // 回溯，记录逗点数量减一
        s = s.slice(0, i + 1) + s.slice(i + 2); // 回溯，字符串中删除刚添加的逗点
      } else {
        break; // 不合法，直接结束本层循环
      }
    }
  };

  // 判断字符串 str 在左闭右闭区间[start, end]所组成的数字是否合法
  const isValid = (str, start, end) => {
    if (start > end) {
      return false;
    }
    // 0 开头的数字不合法
    if (str[start] === "0" && start !== end) {
      return false;
    }
    let num = 0;
    for (let i = start; i <= end; i++) {
      // 遇到非数字字符不合法
      if (str[i] > "9" || str[i] < "0") {
        return false;
      }
      num = num * 10 + Number(str[i]);
      // 如果大于 255 了不合法
      if (num > 255) {
        return false;
      }
    }
    return true;
  };

  backtracking(s, 0, 0);

  return result;
};
