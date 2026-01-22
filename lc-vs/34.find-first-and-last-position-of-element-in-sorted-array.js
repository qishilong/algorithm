/*
 * @lc app=leetcode.cn id=34 lang=javascript
 * @lcpr version=30204
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || (target !== 0 && !target)) {
//     return;
//   }

//   if (nums.length === 0 || typeof target !== "number") {
//     return [-1, -1];
//   }

//   const length = nums.length;
//   const result = new Array(2).fill(-1);

//   for (let i = 0; i < length; i++) {
//     if (nums[i] === target) {
//       if (result[0] === -1) {
//         result[0] = i;
//         result[1] = i;
//       } else {
//         result[1] = i;
//       }
//     }
//   }

//   return result;
// };

/**
 * 2. 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || (target !== 0 && !target)) {
//     return;
//   }

//   if (nums.length === 0 || typeof target !== "number") {
//     return [-1, -1];
//   }

//   if (nums.length === 1 && nums[0] === target) {
//     return [0, 0];
//   }

//   if (nums.length === 1 && nums[0] !== target) {
//     return [-1, -1];
//   }

//   const length = nums.length;
//   const result = new Array(2).fill(-1);

//   let left = 0,
//     right = length - 1;

//   while (left <= right) {
//     const leftVal = nums[left],
//       rightVal = nums[right];

//     if (leftVal !== target) {
//       ++left;
//     } else {
//       if (result[0] === -1) {
//         result[0] = left;
//       }
//     }

//     if (rightVal !== target) {
//       --right;
//     } else {
//       if (result[1] === -1) {
//         result[1] = right;
//       }
//     }

//     if (result[0] !== -1 && result[1] !== -1) {
//       break;
//     }
//   }

//   if ((result[0] === -1 && result[1] !== -1) || (result[0] !== -1 && result[1] === -1)) {
//     result[0] = result[1];
//   }

//   return result;
// };

/**
 * 3. 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums || !Array.isArray(nums) || (target !== 0 && !target)) {
    return;
  }

  if (nums.length === 0 || typeof target !== "number") {
    return [-1, -1];
  }

  if (nums.length === 1 && nums[0] === target) {
    return [0, 0];
  }

  if (nums.length === 1 && nums[0] !== target) {
    return [-1, -1];
  }

  const length = nums.length;

  /**
   * 二分查找
   * @param {number[]} nums
   * @param {number} left
   * @param {number} right
   * @param {number} target
   * @param {boolean} next
   */
  const binarySearch = (nums, target, next) => {
    let left = 0,
      right = length - 1,
      result = length;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midVal = nums[mid];
      // next === true 时：只在 nums[mid] > target 时收缩
      // next === false 时：在 nums[mid] >= target 时收缩
      if (next ? midVal > target : midVal >= target) {
        right = mid - 1;
        result = mid;
      } else {
        left = mid + 1;
      }
    }

    return result;
  };

  const result = [-1, -1];

  const left = binarySearch(nums, target, false); // 查找第一个大于等于 target 的下标
  const right = binarySearch(nums, target, true) - 1; // 查找第一个大于 target 的下标

  // 最终结果校验看是否符合要求
  if (left <= right && right < length && nums[left] === target && nums[right] === target) {
    result[0] = left;
    result[1] = right;
  }

  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [5,7,7,8,8,10]\n8\n
// @lcpr case=end

// @lcpr case=start
// [5,7,7,8,8,10]\n6\n
// @lcpr case=end

// @lcpr case=start
// []\n0\n
// @lcpr case=end

 */
