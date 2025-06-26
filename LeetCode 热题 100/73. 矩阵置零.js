/**
 * 1. 使用标记数组
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function (matrix) {
//   if (
//     !matrix ||
//     !Array.isArray(matrix) ||
//     matrix.length === 0 ||
//     !matrix.every(item => Array.isArray(item))
//   ) {
//     return undefined;
//   }

//   const m = matrix.length,
//     n = matrix[0].length,
//     row = new Array(m).fill(false),
//     col = new Array(n).fill(false);

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         row[i] = col[j] = true;
//       }
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (row[i] || col[j]) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// };

/**
 * 2. 使用两个标记变量
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (
    !matrix ||
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !matrix.every(item => Array.isArray(item))
  ) {
    return undefined;
  }

  const m = matrix.length,
    n = matrix[0].length;

  let flagRow0 = false,
    flagCol0 = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
  }

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      flagRow0 = true;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (flagRow0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (flagCol0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
