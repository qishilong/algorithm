/**
 * 1. 动态规划
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   // n 小于 4 时，结果都是 n 本身
//   if (n < 4) {
//     return n;
//   }

//   const dp = [];
//   dp[1] = 1; // 初始化 dp[1]
//   dp[2] = 2; // 初始化 dp[2]

//   // 注意 i 是从 3 开始的
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// };

/**
 * 2. 动态规划
 * 优化空间复杂度
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // n 小于 4 时，结果都是 n 本身
  if (n < 4) {
    return n;
  }

  const dp = [];
  dp[1] = 1; // 初始化 dp[1]
  dp[2] = 2; // 初始化 dp[2]

  // 注意 i 是从 3 开始的
  for (let i = 3; i <= n; i++) {
    const sum = dp[1] + dp[2];
    dp[1] = dp[2];
    dp[2] = sum;
  }

  return dp[2];
};
