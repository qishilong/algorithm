/**
 * 1. 暴力两层 for 循环
 * 时间复杂度 O(n^2)
 * 力扣超时
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
//   let result = Number.MAX_VALUE;
//   let subSum = 0,
//     subLength = 0;
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     subSum = 0;
//     for (let j = i; j < len; j++) {
//       subSum += nums[j];
//       if (subSum >= target) {
//         subLength = j - i + 1;
//         result = result < subLength ? result : subLength;
//       }
//     }
//   }
//   return result === Number.MAX_VALUE ? 0 : result;
// };

/**
 * 2. 滑动窗口
 * 时间复杂度 O(n)
 * @param {*} target
 * @param {*} nums
 */
var minSubArrayLen = function (target, nums) {
  let slow = 0,
    fast = 0,
    len = nums.length,
    sum = 0,
    subLength = 0,
    result = Number.MAX_VALUE;

  while (fast < len) {
    sum += nums[fast];
    while (sum >= target) {
      subLength = fast - slow + 1;
      result = result < subLength ? result : subLength;
      sum -= nums[slow++];
    }
    fast++;
  }
  return result === Number.MAX_VALUE ? 0 : result;
};
const target = 7,
  nums = [2, 3, 1, 2, 4, 3];
const result = minSubArrayLen(target, nums);
console.log(result);
