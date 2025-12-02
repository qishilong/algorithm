/*
 * @lc app=leetcode.cn id=66 lang=javascript
 * @lcpr version=30204
 *
 * [66] 加一
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (!digits || !Array.isArray(digits) || digits.length === 0) {
    return;
  }

  let length = digits.length;
  let offset = 0;
  const lastVal = digits[length - 1] + 1;
  if (lastVal >= 10) {
    digits[length - 1] = lastVal % 10;
    offset = 1;
  } else {
    digits[length - 1] = lastVal;
    return digits;
  }

  for (let i = length - 2; i >= 0; i--) {
    const val = digits[i] + offset;
    if (val >= 10) {
      digits[i] = val % 10;
      offset = 1;
    } else {
      digits[i] = val;
      offset = 0;
    }
  }

  if (offset > 0) {
    digits = [offset, ...digits];
  }

  return digits;
};

const digits = [8, 9, 9, 9];
console.log(plusOne(digits));
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [9]\n
// @lcpr case=end

 */
