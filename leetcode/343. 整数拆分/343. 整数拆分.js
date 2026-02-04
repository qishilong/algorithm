/**
 * 1. 动态规划
 * @param {number} n
 * @return {number}
 */
// var integerBreak = function (n) {
//   if (!n) {
//     return 0;
//   }

//   const dp = new Array(n + 1).fill(null);

//   dp[2] = 1;

//   for (let i = 3; i <= n; i++) {
//     for (let j = 1; j <= i / 2; j++) {
//       dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j));
//     }
//   }

//   return dp[n];
// };

/**
 * 2. 贪心
 * 每次拆成n个3，如果剩下是4，则保留4，然后相乘
 * 这个结论需要数学证明其合理性！
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (!n) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  if (n === 4) {
    return 4;
  }

  let result = 1;

  while (n > 4) {
    result *= 3;
    n -= 3;
  }

  result *= n;
  return result;
};
