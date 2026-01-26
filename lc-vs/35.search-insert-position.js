/*
 * @lc app=leetcode.cn id=35 lang=javascript
 * @lcpr version=30204
 *
 * [35] 搜索插入位置
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || typeof target !== "number") {
//     return;
//   }

//   if (nums.length === 0) {
//     return 0;
//   }

//   const length = nums.length;

//   if (target === nums[length - 1]) {
//     return length - 1;
//   }

//   if (target > nums[length - 1]) {
//     return length;
//   }

//   for (let i = 0; i < length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }

//   return length;
// };

/**
 * 2. 二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums || !Array.isArray(nums) || typeof target !== "number") {
    return;
  }

  if (nums.length === 0) {
    return 0;
  }

  const length = nums.length;

  if (target > nums[length - 1]) {
    return length;
  }

  if (target === nums[length - 1]) {
    return length - 1;
  }

  /**
   * 二分查找
   * @param {number} target
   */
  const binarySearch = target => {
    let left = 0,
      right = length - 1,
      result = -1;
    while (left <= right) {
      const mid = ((right - left) >> 1) + left;

      const midVal = nums[mid];

      if (midVal < target) {
        left = mid + 1;
      } else {
        result = mid;
        right = mid - 1;
      }
    }
    return result;
  };

  const result = binarySearch(target);

  return result;
};
// console.log(result);

// @lc code=end

/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

 */
