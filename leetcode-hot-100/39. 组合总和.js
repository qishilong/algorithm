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
    (!target && target !== 0)
  ) {
    return [];
  }

  const length = candidates.length,
    path = [],
    result = [];

  const backtracking = (candidates, startIndex, sum) => {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      result.push([...path]);
    }

    for (let i = startIndex; i < length; i++) {
      const curCandidate = candidates[i];
      sum += curCandidate;
      path.push(curCandidate);
      backtracking(candidates, i, sum);
      sum -= curCandidate;
      path.pop();
    }
  };

  backtracking(candidates, 0, 0);

  return result;
};
