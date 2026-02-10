/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30204
 *
 * [54] 螺旋矩阵
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (
    !matrix ||
    !Array.isArray(matrix) ||
    matrix.some(item => !item) ||
    matrix.some(item => !Array.isArray(item))
  ) {
    return;
  }

  if (matrix.length === 0) {
    return [];
  }

  if (matrix.length === 1 && matrix[0].length === 1) {
    return [matrix[0][0]];
  }

  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0;

  const result = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    ++top;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    --right;

    // 注意边界条件，需要判断 top 此时是否小于等于 bottom
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      --bottom;
    }

    // 注意边界条件，需要判断 left 此时是否小于等于 right
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      ++left;
    }
  }

  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */
