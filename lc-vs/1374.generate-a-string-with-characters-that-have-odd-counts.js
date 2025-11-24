/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 * @lcpr version=30204
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n < 0 || !Number.isInteger(n)) {
    return;
  }

  if (n === 0) {
    return "";
  }

  if (n % 2 === 1) {
    return new Array(n).fill("a").join("");
  } else {
    return new Array(n - 1).fill("a").join("") + "b";
  }
};
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 7\n
// @lcpr case=end

 */
