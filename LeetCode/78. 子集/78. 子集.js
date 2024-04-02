/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums || nums.length === 0) {
    return [];
  }

  const result = [],
    path = [];

  const length = nums.length;

  const backtracking = (nums, startIndex) => {
    result.push([...path]); // 收集子集，要放到终止添加的上面，否则会漏掉自己
    // 终止条件，其实可以不加
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

  return result;
};
