/**
 * 1. 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return;
  }

  if (target !== 0 && !target) {
    return;
  }

  const length = nums.length;
  let left = 0,
    right = length - 1,
    res = length;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] >= target) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
};
