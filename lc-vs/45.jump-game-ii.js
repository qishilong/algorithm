/*
 * @lc app=leetcode.cn id=45 lang=javascript
 * @lcpr version=30204
 *
 * [45] 跳跃游戏 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 贪心
 * - 如果当前步数下标覆盖最大距离下标不是终点，继续向后走
 * - 当前当前步数下标下标已经可以覆盖终点，步数不用加一，不用再往后走了
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return;
  }

  if (nums.length < 2) {
    return 0;
  }

  const length = nums.length;

  if (nums[0] >= length - 1) {
    return 1;
  }

  let curStepIndex = 0, // 记录当前步数下标覆盖最大距离下标
    nextStepIndex = 0, // 记录下一步可走的最大距离下标
    step = 0; // 走的总步数

  for (let i = 0; i < length; i++) {
    if (nums[i] + i > nextStepIndex) {
      nextStepIndex = nums[i] + i;
    }

    // 当前没有走到终点，更新下一步以及下一步走完之后可覆盖的最大距离下标
    if (i === curStepIndex) {
      ++step;
      curStepIndex = nextStepIndex;

      // 如果下一步走完之后可覆盖的最大距离下标已经到了终点，不需要再走
      if (curStepIndex >= length - 1) {
        break;
      }
    }
  }

  return step;
};

const nums = [1, 1, 1, 1];
const res = jump(nums);
console.log(res);

// @lc code=end

/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */
