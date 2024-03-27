/**
 * 1. 未经过剪枝操作
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// var combinationSum3 = function (k, n) {
//   const result = [], // 存放结果集
//     path = []; // 符合条件的结果

//   // targetSum: 目标和，也就是题目中的 n
//   // k: 题目中要求 k 个数的集合
//   // sum: 已经收集的元素的总和，也就是 path 里元素的总和
//   // startIndex: 下一层 for 循环搜索的起始位置

//   const backtracking = (targetSum, k, sum, startIndex) => {
//     if (path.length === k) {
//       if (sum === targetSum) {
//         result.push([...path]);
//       }
//       return; // 如果 path.length === k，但 sum !== targetSum 直接返回
//     }
//     for (let i = startIndex; i <= 9; i++) {
//       sum += i; // 处理 sum
//       path.push(i); // 处理 path
//       backtracking(targetSum, k, sum, i + 1); // 注意 i + 1 调整 startIndex
//       sum -= i; // 对 sum 做回溯
//       path.pop(); // 对 path 做回溯
//     }
//   };

//   backtracking(n, k, 0, 1);

//   return result;
// };

/**
 * 2. 剪枝操作
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [], // 存放结果集
    path = []; // 符合条件的结果

  // targetSum: 目标和，也就是题目中的 n
  // k: 题目中要求 k 个数的集合
  // sum: 已经收集的元素的总和，也就是 path 里元素的总和
  // startIndex: 下一层 for 循环搜索的起始位置

  const backtracking = (targetSum, k, sum, startIndex) => {
    // 剪枝操作
    if (sum > targetSum) {
      return;
    }
    if (path.length === k) {
      if (sum === targetSum) {
        result.push([...path]);
      }
      return; // 如果 path.length === k，但 sum !== targetSum 直接返回
    }

    // 剪枝
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      sum += i; // 处理 sum
      path.push(i); // 处理 path
      backtracking(targetSum, k, sum, i + 1); // 注意 i + 1 调整 startIndex
      sum -= i; // 对 sum 做回溯
      path.pop(); // 对 path 做回溯
    }
  };

  backtracking(n, k, 0, 1);

  return result;
};
