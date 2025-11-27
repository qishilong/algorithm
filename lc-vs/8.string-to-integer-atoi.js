/*
 * @lc app=leetcode.cn id=8 lang=javascript
 * @lcpr version=30204
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start·
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (!s || typeof s !== "string" || s.length === 0 || s.trim().length === 0) return 0;

  const minVal = Math.pow(-2, 31),
    maxVal = Math.pow(2, 31) - 1;
  const length = s.length;
  let res = 0,
    sign = 1,
    // 利用 hasSign 标志判断后续数字是否中断，是否有其他"+"/"-"符号
    hasSign = false;

  for (let i = 0; i < length; i++) {
    const val = s[i];
    const valNumber = Number(val);
    if (val === " ") {
      if (hasSign) {
        break;
      }
      continue;
    }
    if (val === "-") {
      sign = -1;
      if (hasSign) {
        break;
      }
      hasSign = true;
    } else if (val === "+") {
      sign = 1;
      if (hasSign) {
        break;
      }
      hasSign = true;
    } else if (valNumber >= 0 && valNumber <= 9) {
      hasSign = true;

      res = res * 10 + valNumber * sign;

      // 计算完 res 值之后再判断结果是否大于题目规定的最大值或最小值
      if (res > maxVal) {
        return maxVal;
      }
      if (res < minVal) {
        return minVal;
      }
    } else {
      break;
    }
  }

  return res;
};

const v = "21474836460";

const res = myAtoi(v);
console.log(res);

// @lc code=end·

/*
// @lcpr case=start
// "42"\n
// @lcpr case=end

// @lcpr case=start
// " -042"\n
// @lcpr case=end

// @lcpr case=start
// "1337c0d3"\n
// @lcpr case=end

// @lcpr case=start
// "0-1"\n
// @lcpr case=end

// @lcpr case=start
// "words and 987"\n
// @lcpr case=end

 */
