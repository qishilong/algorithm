/**
 * 1. 动态规划
 * dp[3] = dp[2] * dp[0] + dp[1] * dp[1] + dp[0] * dp[2]
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (!n) {
    return n;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 5;
  }

  // 初始化dp数组
  const dp = new Array(n + 1).fill(null);
  // 初始化n<=3之前的dp数组的值
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;

  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      /**
       * 对于第i个节点，需要考虑1作为根节点直到i作为根节点的情况，所以需要累加
       * 一共i个节点，对于根节点j时,左子树的节点个数为j-1，右子树的节点个数为i-j
       */
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
