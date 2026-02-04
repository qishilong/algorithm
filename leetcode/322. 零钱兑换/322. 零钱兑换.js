/* 
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	if (!amount) {
		return 0;
	}
	const dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;
	for (let i = 0, length = coins.length; i < length; i++) {
		for (let j = coins[i]; j <= amount; j++) {
			dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
};

const coins = [1, 2, 5],
	amount = 11;

const result = coinChange(coins, amount);
console.log(result);
