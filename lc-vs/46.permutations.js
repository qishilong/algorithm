/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30204
 *
 * [46] 全排列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 回溯
 * - 注意需要判断同一递归路径中当前元素是否使用过
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return;
  }

  if (nums.length <= 1) {
    return [nums];
  }

  const length = nums.length;

  const path = [],
    result = [],
    used = new Array(length).fill(false); // 判断当前递归路径中当前元素是否使用过

  /**
   * @param {number[]} path
   * @param {number[]} used
   */
  const backtracking = (path, used) => {
    if (path.length === length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < length; i++) {
      if (used[i]) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;
      backtracking(path, used);
      path.pop();
      used[i] = false;
    }
  };

  backtracking(path, used);

  return result;
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
