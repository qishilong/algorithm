/**
 * 贪心
 * 收集正利润的区间，就是股票买卖的区间，只需要关注最终利润，不需要记录区间。
 * 局部最优：收集每天的正利润，全局最优：求得最大利润。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || !Array.isArray(prices) || prices.length === 0) {
    return 0;
  }
  let result = 0;
  for (let i = 1, length = prices.length; i < length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      result += prices[i] - prices[i - 1];
    }
  }
  return result;
};
