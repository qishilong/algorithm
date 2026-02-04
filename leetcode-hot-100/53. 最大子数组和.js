/**
 * 1. 暴力解法
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return 0;
//   }

//   if (nums.length === 1) {
//     return nums[0];
//   }

//   const length = nums.length;
//   let sum = 0,
//     max = -Infinity;

//   for (let i = 0; i < length; i++) {
//     sum = 0;
//     for (let j = i; j < length; j++) {
//       sum += nums[j];
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   }
//   return max;
// };

/**
 * 2. 贪心
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return 0;
//   }

//   if (nums.length === 1) {
//     return nums[0];
//   }

//   const length = nums.length;
//   let sum = 0,
//     max = -Infinity;

//   for (let i = 0; i < length; i++) {
//     sum += nums[i];

//     // 取区间累计的最大值（相当于不断确定最大子数组终止位置）
//     if (sum > max) {
//       max = sum;
//     }

//     // 相当于重置最大子数组起始位置，因为遇到负数一定是拉低总和
//     if (sum < 0) {
//       sum = 0;
//     }
//   }

//   return max;
// };

/**
 * 3. 前缀和
 * 保证前缀和 S[i] - S[j] 最大
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const length = nums.length;

  const prefix = new Array(length + 1).fill(0);

  for (let i = 1; i <= length; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }

  let pre_min = prefix[0],
    max = -Infinity;

  for (let i = 1; i <= length; i++) {
    max = Math.max(max, prefix[i] - pre_min);
    pre_min = Math.min(pre_min, prefix[i]);
  }

  return max;
};
