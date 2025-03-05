/**
 * 动态规划
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  if (!stones) {
    return stones;
  }
  if (stones.length === 0) {
    return 0;
  }
  if (stones.length === 1) {
    return stones[0];
  }

  // 求和
  const sum = stones.reduce((a, b) => a + b, 0);

  // target只是最大重量的一半
  const target = Math.floor(sum / 2);
  const stonesLength = stones.length;

  // 创建dp数组，因为要求的target其实只是最大重量的一半，所以dp数组开到sum/2 +1大小就可以了
  const dp = new Array(target + 1).fill(0);

  // 遍历物品
  for (let i = 0; i < stonesLength; i++) {
    // 遍历背包
    for (let j = target; j >= stones[i]; j--) {
      // 01背包的递推公式为：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
      // 由于本题 “最多可以装的价值为 dp[j]” 等同于 “最多可以背的重量为dp[j]”，所以本题的递推公式为：dp[j] = max(dp[j], dp[j - stones[i]] + stones[i])
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  // 相撞之后剩下的最小石头重量就是 (sum - dp[target]) - dp[target]
  return sum - dp[target] - dp[target];
};
