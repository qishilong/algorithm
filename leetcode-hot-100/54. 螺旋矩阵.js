/**
 * 1. 模拟矩阵路径
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//   if (
//     !matrix ||
//     !Array.isArray(matrix) ||
//     matrix.length === 0 ||
//     !!matrix.find(item => !Array.isArray(item)) ||
//     !!matrix.find(item => item.length === 0)
//   ) {
//     return undefined;
//   }

//   if (matrix.length === 1 && matrix[0].length === 1) {
//     return [matrix[0][0]];
//   }

//   const rows = matrix.length,
//     cols = matrix[0].length,
//     total = rows * cols,
//     visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false)),
//     result = new Array(total).fill(0),
//     directions = [
//       [0, 1], // 向右移动 (行不变，列+1)
//       [1, 0], // 向下移动 (行+1，列不变)
//       [0, -1], // 向左移动 (行不变，列-1)
//       [-1, 0] // 向上移动 (行-1，列不变)
//     ];

//   let directionIndex = 0,
//     row = 0,
//     col = 0;

//   for (let i = 0; i < total; i++) {
//     // 记录当前位置的元素值到结果数组
//     result[i] = matrix[row][col];
//     // 标记当前位置为已访问
//     visited[row][col] = true;

//     // 计算下一步的位置
//     const nextRow = directions[directionIndex][0] + row,
//       nextCol = directions[directionIndex][1] + col;

//     if (
//       // 检查下一步是否合法（在边界内且未访问过）
//       !(
//         0 <= nextRow &&
//         nextRow < rows &&
//         0 <= nextCol &&
//         nextCol < cols &&
//         !visited[nextRow][nextCol]
//       )
//     ) {
//       // 如果不合法，则顺时针旋转方向（directionIndex = (directionIndex + 1) % 4）
//       directionIndex = (directionIndex + 1) % 4;
//     }

//     // 移动到新位置继续遍历
//     row += directions[directionIndex][0];
//     col += directions[directionIndex][1];
//   }

//   return result;
// };

/**
 * 2. 模拟
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (
    !matrix ||
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !!matrix.find(item => !Array.isArray(item)) ||
    !!matrix.find(item => item.length === 0)
  ) {
    return undefined;
  }

  if (matrix.length === 1 && matrix[0].length === 1) {
    return [matrix[0][0]];
  }

  const result = [];

  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (bottom >= top) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (right >= left) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
