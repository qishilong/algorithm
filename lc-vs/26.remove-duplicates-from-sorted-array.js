/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30204
 *
 * [26] 删除有序数组中的重复项
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return;
  }

  if (nums.length <= 1) {
    return nums.length;
  }

  let n = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[n] = nums[i];
      ++n;
    }
  }

  return n;
};
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
