/*
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=30204
 *
 * [33] 搜索旋转排序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 遍历查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
//     return;
//   }

//   const length = nums.length;

//   for (let i = 0; i < length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// };

/**
 * 2. 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || (target !== 0 && !target)) {
//     return;
//   }

//   if (nums.length === 0 || typeof target !== "number") {
//     return -1;
//   }

//   let left = 0,
//     right = nums.length - 1;

//   if (nums[left] === target) {
//     return left;
//   }

//   if (nums[right] === target) {
//     return right;
//   }

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const midVal = nums[mid];

//     if (midVal === target) {
//       return mid;
//     }

//     if (nums[0] <= midVal) {
//       if (nums[0] < target && target < midVal) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (midVal < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// };

/**
 * 3. 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || !Array.isArray(nums) || (target !== 0 && !target)) {
    return;
  }

  if (nums.length === 0 || typeof target !== "number") {
    return -1;
  }

  let left = 0,
    right = nums.length - 1;

  if (nums[left] === target) {
    return left;
  }

  if (nums[right] === target) {
    return right;
  }

  while (left <= right) {
    const leftVal = nums[left];
    const rightVal = nums[right];

    if (leftVal === target) {
      return left;
    }
    if (rightVal === target) {
      return right;
    }

    if (leftVal < target) {
      ++left;
    }

    if (leftVal > target) {
      if (rightVal > target) {
        --right;
      }
      if (rightVal < target) {
        return -1;
      }
    }
  }

  return -1;
};

// @lc code=end

/*
// @lcpr case=start
// [4,5,6,7,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */
