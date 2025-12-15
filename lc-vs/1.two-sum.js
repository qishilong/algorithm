/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
//     return;
//   }

//   const length = nums.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// };

/**
 * 2. 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
//     return;
//   }

//   const length = nums.length;

//   const objArr = nums.map((item, index) => {
//     return {
//       val: item,
//       index,
//     };
//   });

//   objArr.sort((a, b) => a.val - b.val);

//   for (let i = 0, j = length - 1; i < j; i++) {
//     while (i < j && objArr[i].val + objArr[j].val > target) {
//       j--;
//     }

//     if (i < j && objArr[i].val + objArr[j].val === target) {
//       return [objArr[i].index, objArr[j].index];
//     }
//   }

//   return [];
// };

/**
 * 3. map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
    return;
  }

  const length = nums.length;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }

  return [];
};
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
