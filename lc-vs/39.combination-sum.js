/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30204
 *
 * [39] 组合总和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 回溯
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (
    !candidates ||
    !Array.isArray(candidates) ||
    candidates.length === 0 ||
    typeof target !== "number"
  ) {
    return;
  }

  if (candidates.length === 1 && candidates[0] !== target) {
    return [];
  }

  const length = candidates.length,
    path = [],
    result = [];

  /**
   * @param {number} startIndex
   * @param {number} sum
   */
  const backtracking = (startIndex, sum) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      result.push([...path]);
    }

    for (let i = startIndex; i < length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(i, sum);
      sum -= candidates[i];
      path.pop();
    }
  };

  backtracking(0, 0);

  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */
