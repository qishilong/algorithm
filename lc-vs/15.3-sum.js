/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 利用两数之和求三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length < 3) {
//     return [];
//   }

//   if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
//     return [nums];
//   }

//   // 先排序，后期好去重
//   nums.sort((a, b) => a - b);

//   if (nums[0] > 0) {
//     return [];
//   }

//   const length = nums.length;
//   const result = [];

//   /**
//    * 两数之和
//    * @param {number[]} numArr
//    * @param {number} target
//    */
//   const twoSum = (numArr, target, startIndex) => {
//     const length = numArr.length;
//     const result = [];

//     let right = length - 1;

//     for (let i = startIndex; i < length; i++) {
//       // 题目要求返回所有和为 0 且不重复的三元组，所以需要对数组去重
//       if (i > startIndex && numArr[i] === numArr[i - 1]) {
//         continue;
//       }
//       while (i < right && numArr[i] + numArr[right] > target) {
//         right--;
//       }
//       if (i < right && numArr[i] + numArr[right] === target) {
//         result.push([numArr[i], numArr[right]]);
//       }
//     }
//     return result;
//   };

//   for (let i = 0; i < length; i++) {
//     // 题目要求返回所有和为 0 且不重复的三元组，所以需要对数组去重
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }

//     twoSum(nums, -nums[i], i + 1).forEach((item) => {
//       result.push([...item, nums[i]]);
//     });
//   }

//   return result;
// };

/**
 * 2. 双指针
 * nums[i] + nums[j] + nums[k] === 0
 * ===>
 * nums[i] + nums[j] === -nums[k]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length < 3) {
    return [];
  }

  if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
    return [nums];
  }

  // 先排序，后期好去重
  nums.sort((a, b) => a - b);

  if (nums[0] > 0) {
    return [];
  }

  const length = nums.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 相当于从每个数开始都判断一下是否可以组成一个三元组
    let left = i + 1,
      right = length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum > 0) {
        --right;
      } else if (sum < 0) {
        ++left;
      } else {
        result.push([nums[left], nums[right], nums[i]]);

        // 题目要求返回所有和为 0 且不重复的三元组，所以需要对数组去重
        while (left < right && nums[left] === nums[left + 1]) {
          ++left;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          --right;
        }

        ++left;
        --right;
      }
    }
  }

  return result;
};

// const nums = [-1, 0, 1, 2, -1, -4];
// const res = threeSum(nums);
// console.log(res);
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
