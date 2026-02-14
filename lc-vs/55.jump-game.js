/*
 * @lc app=leetcode.cn id=55 lang=javascript
 * @lcpr version=30204
 *
 * [55] 跳跃游戏
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 贪心
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return false;
  }

  if (nums.length === 0) {
    return false;
  }

  if (nums.length === 1 || (nums.length === 2 && nums[0] > 0)) {
    return true;
  }

  const length = nums.length;
  let curStepIndex = 0,
    nextStepIndex = 0;

  for (let i = 0; i < length; i++) {
    if (i + nums[i] > nextStepIndex) {
      nextStepIndex = i + nums[i];
    }

    if (i === curStepIndex) {
      curStepIndex = nextStepIndex;

      if (curStepIndex >= length - 1) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */
