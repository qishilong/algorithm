/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 * @lcpr version=30204
 *
 * [1137] 第 N 个泰波那契数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 递归
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//   if (n < 0 || typeof n !== "number") {
//     return;
//   }

//   if (n === 0) {
//     return 0;
//   }

//   if (n === 1 || n === 2) {
//     return 1;
//   }

//   const arr = new Array(n + 1).fill(0);
//   arr[1] = 1;
//   arr[2] = 1;

//   const fn = (n, i) => {
//     if (i === n + 1) {
//       return;
//     }
//     arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
//     fn(n, i + 1);
//   };

//   fn(n, 3);

//   return arr[n];
// };

/**
 * 2. 迭代
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 0 || typeof n !== "number") {
    return;
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  const arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  arr[2] = 1;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
  }

  return arr[n];
};
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 25\n
// @lcpr case=end

 */
