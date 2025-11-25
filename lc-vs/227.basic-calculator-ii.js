/*
 * @lc app=leetcode.cn id=227 lang=javascript
 * @lcpr version=30204
 *
 * [227] 基本计算器 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (!s || typeof s !== "string") {
    return;
  }

  const sLength = s.length,
    operatorArr = ["+", "-", "*", "/"],
    firstStr = s[0],
    lastStr = s[sLength - 1];
  if (operatorArr.includes(firstStr) || operatorArr.includes(lastStr)) {
    return;
  }

  if (sLength === 1) {
    return Number(s[0]);
  }

  // 基于运算符号分割字符串
  let strArr = s.split(/(\+|-|\*|\/)/g).map((item) => item.trim());
  let strArrLength = strArr.length;
  let stack = [];
  const priorityOperatorArr = ["*", "/"];
  const remainingOperatorArr = ["+", "-"];

  let i = 0;

  while (i < strArrLength) {
    const val = strArr[i];
    if (priorityOperatorArr.includes(val)) {
      const topVal = Number(stack.pop());
      const nextVal = Number(strArr[++i]);
      let res = 0;
      if (val === "*") {
        res = Math.floor(topVal * nextVal);
      } else {
        res = Math.floor(topVal / nextVal);
      }
      stack.push(res);
    } else {
      stack.push(val);
    }
    i++;
  }

  i = 0;

  strArr = [...stack];
  stack = [];
  strArrLength = strArr.length;

  while (i < strArrLength) {
    const val = strArr[i];
    if (remainingOperatorArr.includes(val)) {
      const topVal = Number(stack.pop());
      const nextVal = Number(strArr[++i]);
      let res = 0;
      if (val === "+") {
        res = Math.floor(topVal + nextVal);
      } else {
        res = Math.floor(topVal - nextVal);
      }
      stack.push(res);
    } else {
      stack.push(val);
    }
    i++;
  }

  return Number(stack[0]);
};

const s = "12-3*4";
calculate(s);
// @lc code=end

/*
// @lcpr case=start
// "3+2*2"\n
// @lcpr case=end

// @lcpr case=start
// " 3/2 "\n
// @lcpr case=end

// @lcpr case=start
// " 3+5 / 2 "\n
// @lcpr case=end

 */
