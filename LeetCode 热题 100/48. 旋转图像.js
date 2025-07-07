/**
 * 1. 利用辅助数组
 * 对于矩阵中的元素 matrix[row][col]，在旋转后，它的新位置为 matrix_new[col][n−row−1]。
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   if (
//     !matrix ||
//     !Array.isArray(matrix) ||
//     matrix.length === 0 ||
//     matrix.some(item => !item || !Array.isArray(item) || item.length === 0)
//   ) {
//     return;
//   }

//   const n = matrix.length;

//   const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       matrix_new[j][n - i - 1] = matrix[i][j];
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = matrix_new[i][j];
//     }
//   }
// };

/**
 * 2. 用翻转代替旋转
 * 水平轴翻转：matrix[row][col] -> matrix[n−row−1][col]
 * 主对角线翻转: matrix[row][col] -> matrix[col][row]
 * 和方法一的关键等式：matrix_new[col][n−row−1]=matrix[row][col] 是一致的。
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (
    !matrix ||
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    matrix.some(item => !item || !Array.isArray(item) || item.length === 0)
  ) {
    return;
  }

  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
