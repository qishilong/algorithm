/**
 * 1. 回溯
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return nums;
  }

  if (nums.length <= 1) {
    return [nums];
  }

  const result = [],
    length = nums.length,
    path = [],
    used = new Array(length).fill(false);

  const backtracking = (nums, path, used) => {
    if (path.length === length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      backtracking(nums, path, used);
      path.pop();
      used[i] = false;
    }
  };

  backtracking(nums, path, used);

  return result;
};
