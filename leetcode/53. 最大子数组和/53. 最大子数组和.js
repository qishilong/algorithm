/**
 * 1. 贪心
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return nums;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let result = -Infinity,
    sum = 0;
  for (let i = 0, length = nums.length; i < length; i++) {
    sum += nums[i];
    // 取区间累计的最大值（相当于不断确定最大子数组终止位置）
    if (result < sum) {
      result = sum;
    }
    // 相当于重置最大子数组起始位置，因为遇到负数一定是拉低总和
    if (sum < 0) {
      sum = 0;
    }
  }
  return result;
};

/**
 * 2. 前缀和
 * 保证前缀和 S[i] - S[j] 最大
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   if (nums.length === 0) {
//     return nums;
//   }
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   const length = nums.length;
//   const sums = Array.from({ length: length + 1 }).fill(0);
//   // 求前缀和
//   for (let i = 1; i <= length; i++) {
//     sums[i] = sums[i - 1] + nums[i - 1];
//   }

//   // 初始化结果为最小值
//   let result = -Infinity,
//     pre_min = sums[0];

//   for (let i = 1; i <= length; i++) {
//     result = Math.max(result, sums[i] - pre_min);
//     pre_min = Math.min(sums[i], pre_min);
//   }

//   return result;
// };
