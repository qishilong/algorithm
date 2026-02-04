/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums || nums.length === 0) {
    return [[]];
  }
  if (nums.length === 1) {
    return [nums];
  }

  const result = [],
    path = [],
    length = nums.length,
    used = new Array(length).fill(false);

  const backtracking = (nums, path, used) => {
    // 说明找到了一组
    if (path.length === length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < length; i++) {
      // 说明当前的元素已经被使用过，直接跳过
      if (used[i]) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      backtracking(nums, path, used);
      path.pop(); // 回溯
      used[i] = false; // 回溯
    }
  };

  backtracking(nums, path, used);

  return result;
};
