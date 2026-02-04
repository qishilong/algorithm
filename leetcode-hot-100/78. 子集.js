/**
 * 1. 回溯
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return;
  }

  if (nums.length === 0) {
    return [[]];
  }

  const length = nums.length,
    res = [],
    path = [];

  const backtracking = (nums, startIndex) => {
    res.push([...path]);
    if (startIndex >= length) {
      return;
    }

    for (let i = startIndex; i < length; i++) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };

  backtracking(nums, 0);

  return res;
};
