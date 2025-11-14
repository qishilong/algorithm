/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 * @lcpr version=30204
 *
 * [1304] 和为零的 N 个不同整数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 取随机数，如果结果数组中已经存在当前随机数，则重新取，知道结果数组中没有当前随机数，取随机数时，从0遍历到n-1，最后对前 n-1 个数求和，最后用求和结果的复数填充数组最后一位
 * @param {number} n
 * @return {number[]}
 */
// var sumZero = function (n) {
//   if (typeof n !== "number" || n <= 0) {
//     return;
//   }

//   if (n === 1) {
//     return [0];
//   }

//   if (n === 2) {
//     return [-1, 1];
//   }

//   const ans = [];

//   const getRandom = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const maxVal = 2 * n;

//   for (let i = 0; i < n - 1; i++) {
//     let random = getRandom(1, maxVal);
//     while (ans.includes(random)) {
//       random = getRandom(1, maxVal);
//     }
//     ans.push(random);
//   }

//   const sum = ans.reduce((x, y) => x + y, 0);

//   return [...ans, -sum];
// };

/**
 * 1. 取随机数，如果结果数组中已经存在当前随机数，则重新取，知道结果数组中没有当前随机数，取随机数时，从0遍历到n-1，最后对前 n-1 个数求和，最后用求和结果的复数填充数组最后一位
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  if (typeof n !== "number" || n <= 0) {
    return;
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [-1, 1];
  }

  const ans = [];

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const maxVal = 2 * n;

  for (let i = 0; i < n - 1; i++) {
    let random = getRandom(1, maxVal);
    while (ans.includes(random)) {
      random = getRandom(1, maxVal);
    }
    ans.push(random);
  }

  const sum = ans.reduce((x, y) => x + y, 0);

  return [...ans, -sum];
};
sumZero(100);
// @lc code=end

/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
