/**
 * 动态规划
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (!nums) {
    return nums;
  }
  if (nums.length <= 1) {
    return false;
  }

  let sum = 0;

  // dp[i]中的i表示背包内总和
  // 题目中说每个数组中的元素不会超过100，数组的大小不会超过200
  // 总和不会大于20000，背包最大只需要其中一半，所以10001大小就可以了
  const dp = new Array(10001).fill(0);
  const numsLength = nums.length;

  // 计算总和
  for (let i = 0; i < numsLength; i++) {
    sum += nums[i];
  }

  // 如果总和是奇数，那么不可能分成两个相等的子集
  if (sum % 2 === 1) {
    return false;
  }

  // 目标值
  const target = sum / 2;

  // 开始01背包
  for (let i = 0; i < numsLength; i++) {
    // 每一个元素一定是不可重复放入的，所以从大到小遍历
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  // 集合中的元素正好可以凑成总和target
  if (dp[target] === target) {
    return true;
  }
  return false;
};
