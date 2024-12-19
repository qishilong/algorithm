/**
 * 1. 动态规划
 * dp数组优化前
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function (cost) {
//   if (!cost) {
//     return cost;
//   }

//   if (cost.length < 2) {
//     return 0;
//   }

//   const costLength = cost.length;
//   const dp = new Array(costLength + 1).fill(0); // dp[0], dp[1] 初始化为 0，默认第一步是不花费体力的

//   for (let i = 2; i <= costLength; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }

//   return dp[costLength];
// };

/**
 * 2. 动态规划
 * dp数组优化后
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (!cost) {
    return cost;
  }

  if (cost.length < 2) {
    return 0;
  }
  let dp0 = 0,
    dp1 = 0;

  for (let i = 2, costLength = cost.length; i <= costLength; i++) {
    const temp = Math.min(dp1 + cost[i - 1], dp0 + cost[i - 2]); // 记录前两位
    dp0 = dp1;
    dp1 = temp;
  }

  return dp1;
};
