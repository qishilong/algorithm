// /**
//  * 利用新建的 used 路径记录去重
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum2 = function (candidates, target) {
//   const result = [],
//     path = [];
//   const length = candidates.length;

//   const used = new Array(length).fill(false);

//   const backtracking = (candidates, target, sum, startIndex) => {
//     if (sum > target) {
//       return;
//     }
//     if (sum === target) {
//       result.push([...path]);
//       return;
//     }

//     for (let i = startIndex; i < length && sum + candidates[i] <= target; i++) {
//       // used[i - 1] = true，说明同一树枝 candidates[i - 1] 使用过
//       // used[i - 1] = false，说明同一树层 candidates[i - 1] 使用过
//       // 要对同一树层使用过的元素进行跳过
//       if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
//         continue;
//       }

//       sum += candidates[i];
//       path.push(candidates[i]);
//       used[i] = true;
//       backtracking(candidates, target, sum, i + 1); // 和 39.组合总和的区别是，这里是 i + 1，每个数字在每个组合中只能使用一次
//       sum -= candidates[i];
//       path.pop();
//       used[i] = false;
//     }
//   };

//   // 首先对 candidates 排序，让其相同的元素都挨在一起
//   candidates = candidates.sort((a, b) => a - b);

//   backtracking(candidates, target, 0, 0);

//   return result;
// };

/**
 * 利用 startIndex 去重
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
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

    for (let i = startIndex; i < length && sum + candidates[i] <= target; i++) {
      // 可以直接利用 startIndex 对同一树层使用过的元素进行跳过
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }

      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, sum, i + 1); // 和 39.组合总和的区别是，这里是 i + 1，每个数字在每个组合中只能使用一次
      sum -= candidates[i];
      path.pop();
    }
  };

  // 首先对 candidates 排序，让其相同的元素都挨在一起
  candidates = candidates.sort((a, b) => a - b);

  backtracking(candidates, target, 0, 0);

  return result;
};
