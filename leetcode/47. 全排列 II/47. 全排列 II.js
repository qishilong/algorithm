/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
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
    // 此时说明找到了一组
    if (path.length === length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < length; i++) {
      // used[i - 1] = true, 说明同一树枝nums[i - 1]使用过
      // used[i - 1] = false, 说明同一树层nums[i - 1]使用过
      // 如果同一树层nums[i - 1]使用过，则直接跳过
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }

      if (used[i] === false) {
        used[i] = true;
        path.push(nums[i]);
        backtracking(nums, path, used);
        used[i] = false;
        path.pop();
      }
    }
  };

  // 需要先排序，才能去重
  nums.sort((a, b) => a - b);

  backtracking(nums, path, used);

  return result;
};
// 时间复杂度: 最差情况所有元素都是唯一的。复杂度和全排列1都是 O(n! * n) 对于 n 个元素一共有 n! 中排列方案。而对于每一个答案，我们需要 O(n) 去复制最终放到 result 数组
// 空间复杂度: O(n) 回溯树的深度取决于我们有多少个元素
