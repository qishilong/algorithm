/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30204
 *
 * [48] 旋转图像
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

/**

[0,0] -> [0,2]
[0,1] -> [1,2]
[0,2] -> [2,2]

[1,0] -> [0,1]
[1,1] -> [1,1]
[1,2] -> [2,1]

[2,0] -> [0,0]
[2,1] -> [1,0]
[2,2] -> [2,0]

matrix[x][y] = matrix[y][matrix.length-x-1]

 */
/**
 * 1. 利用辅助二维数组
 * 对于矩阵数组 matrix[row][col]，翻转后的新位置为 matrix[col][matrix.length-row-1]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function (matrix) {
//   if (!matrix || !Array.isArray(matrix) || matrix.some(item => !item || !Array.isArray(item))) {
//     return;
//   }

//   const length = matrix.length;

//   const matrixNew = new Array(length).fill(0).map(item => new Array(length).fill(0));

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       matrixNew[j][length - i - 1] = matrix[i][j];
//     }
//   }

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       matrix[i][j] = matrixNew[i][j];
//     }
//   }

//   return matrix;
// };

/**

[[1,2,3],
[4,5,6],
[7,8,9]]

->

[[7,4,1],
[8,5,2],
[9,6,3]]

[0,0] -> [0,2]
[0,1] -> [1,2]
[0,2] -> [2,2]

[1,0] -> [0,1]
[1,1] -> [1,1]
[1,2] -> [2,1]

[2,0] -> [0,0]
[2,1] -> [1,0]
[2,2] -> [2,0]

水平轴翻转：matrix[x][y] -> matrix[matrix.length-x-1][y]
主对角线翻转：matrix[x][y] -> matrix[y][x]

 */

/**
 * 2. 原地翻转二维数组
 * - 水平轴翻转：matrix[x][y] -> matrix[matrix.length-x-1][y]
 * - 主对角线翻转：matrix[x][y] -> matrix[y][x]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix || !Array.isArray(matrix) || matrix.some(item => !item || !Array.isArray(item))) {
    return;
  }

  const length = matrix.length;

  // 水平轴翻转
  for (let i = 0; i < length >> 1; i++) {
    for (let j = 0; j < length; j++) {
      [matrix[i][j], matrix[length - i - 1][j]] = [matrix[length - i - 1][j], matrix[i][j]];
    }
  }

  // 主对角线翻转
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
};
// @lc code=end
/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n
// @lcpr case=end

 */
