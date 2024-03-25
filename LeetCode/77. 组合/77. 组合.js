/**
 * 未经过剪枝优化
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function (n, k) {
//   const result = [], // 存放符合条件结果的集合
//     path = []; // 用来存放符合条件结果
//   const backTracking = (n, k, startIndex) => {
//     if (path.length === k) {
//       result.push([...path]); // 如果直接写成 result.push(path) 的话，保存的一直是定义 path 时的引用，所以需要转换成新数组 push
//       return;
//     }

//     for (let i = startIndex; i <= n; i++) {
//       path.push(i); // 处理节点
//       backTracking(n, k, i + 1); // 递归
//       path.pop(); // 回溯，撤销处理的节点
//     }
//   };

//   backTracking(n, k, 1);

//   return result;
// };

/**
 * 剪枝优化
 * 举一个例子，n = 4，k = 4的话，那么第一层for循环的时候，从元素2开始的遍历都没有意义了。 在第二层for循环，从元素3开始的遍历都没有意义了。
 * 所以，可以剪枝的地方就在递归中每一层的for循环所选择的起始位置。如果for循环选择的起始位置之后的元素个数 已经不足 我们需要的元素个数了，那么就没有必要搜索了。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [], // 存放符合条件结果的集合
    path = []; // 用来存放符合条件结果
  const backTracking = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path]); // 如果直接写成 result.push(path) 的话，保存的一直是定义 path 时的引用，所以需要转换成新数组 push
      return;
    }

    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i); // 处理节点
      backTracking(n, k, i + 1); // 递归
      path.pop(); // 回溯，撤销处理的节点
    }
  };

  backTracking(n, k, 1);

  return result;
};
