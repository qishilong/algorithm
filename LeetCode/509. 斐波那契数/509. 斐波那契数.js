/**
 * 1. 动态规划
 * 维护一个 dp 数组
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (!n) {
//     return n
//   }

//   if (n > 0 && n <= 2) {
//     return 1
//   }

//   const dp = [0, 1, 1]

//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }

//   return dp[n]
// }

/**
 * 2. 动态规划
 * 只维护两个数值
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (!n) {
//     return n
//   }

//   if (n > 0 && n <= 2) {
//     return 1
//   }

//   let dp1 = 1,
//     dp2 = 1,
//     sum = -Infinity

//   for (let i = 3; i <= n; i++) {
//     sum = dp1 + dp2
//     dp1 = dp2
//     dp2 = sum
//   }

//   return sum
// }

/**
 * 3. 递归
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (!n) {
    return n
  }

  if (n > 0 && n <= 2) {
    return 1
  }

  return fib(n - 1) + fib(n - 2)
}
