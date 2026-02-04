/**
 * 未经过剪枝优化
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [],
    path = [];
  const length = candidates.length;

  const backtracking = (candidates, target, sum, startIndex) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i < length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, sum, i); // 关键点：不用 i + 1, 表示可以重复读取当前的数
      sum -= candidates[i]; // 回溯
      path.pop(); // 回溯
    }
  };

  backtracking(candidates, target, 0, 0);

  return result;
};

/**
 * 剪枝优化
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [],
    path = [];
  const length = candidates.length;

  const backtracking = (candidates, target, sum, startIndex) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push([...path]);
      return;
    }

    // 如果 sum + candidates[i] > target 就终止遍历
    for (let i = startIndex; i < length && sum + candidates[i] <= target; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, sum, i); // 关键点：不用 i + 1, 表示可以重复读取当前的数
      sum -= candidates[i]; // 回溯
      path.pop(); // 回溯
    }
  };

  candidates = candidates.sort((a, b) => a - b); // candidates 需要先经过一次排序

  backtracking(candidates, target, 0, 0);

  return result;
};
