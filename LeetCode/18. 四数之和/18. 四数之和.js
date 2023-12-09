const { quickSortFn } = require("../../notes/tools/快速排序.js");

/**
 * 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (!nums || nums.length < 4) {
    return [];
  }
  quickSortFn(nums);
  const result = [],
    len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1,
        right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum > target) {
          right--;
          continue; // 直接跳出当前循环，进入下一次循环
        } else if (sum < target) {
          left++;
          continue; // 直接跳出当前循环，进入下一次循环
        } else {
          result.push([nums[i], nums[j], nums[right], nums[left]]);
          // 对 nums[left] 和 nums[right] 进行去重
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return result;
};
const nums = [1, 0, -1, 0, -2, 2],
  target = 0;
const result = fourSum(nums, target);
console.log(result);
