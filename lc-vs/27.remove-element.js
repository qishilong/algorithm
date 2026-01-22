/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=30204
 *
 * [27] 移除元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 双层遍历
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   if (!nums || !Array.isArray(nums) || (val !== 0 && !val)) {
//     return;
//   }

//   if (nums.length === 0) {
//     return 0;
//   }

//   if (!nums.includes(val)) {
//     return nums.length;
//   }

//   let length = nums.length;

//   for (let i = 0; i < length; i++) {
//     if (nums[i] === val) {
//       for (let j = i + 1; j < length; j++) {
//         nums[j - 1] = nums[j];
//       }
//       --i;
//       --length;
//     }
//   }

//   return length;
// };

/**
 * 2. 快慢指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums || !Array.isArray(nums) || (val !== 0 && !val)) {
    return;
  }

  if (nums.length === 0) {
    return 0;
  }

  if (!nums.includes(val)) {
    return nums.length;
  }

  const length = nums.length;
  let fast = 0,
    slow = 0;

  while (fast < length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }

  return slow;
};
// @lc code=end

/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */
