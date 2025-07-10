/**
 * 1. 二分查找
 * 对矩阵的第一列的元素二分查找，找到最后一个不大于目标值的元素，然后在该元素所在行中二分查找目标值是否存在。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (
    !matrix ||
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    matrix.some(item => !item || !Array.isArray(item))
  ) {
    return false;
  }

  const binarySearchFirstColumn = (matrix, target) => {
    let low = -1,
      high = matrix.length - 1;

    while (low < high) {
      const mid = ((high - low + 1) >> 1) + low;
      if (matrix[mid][0] <= target) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }

    return low;
  };

  const binarySearchRow = (row, target) => {
    let left = 0,
      right = row.length - 1;

    while (left <= right) {
      const mid = ((right - left) >> 1) + left;

      if (row[mid] === target) {
        return true;
      } else if (row[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;
  };

  const rowIndex = binarySearchFirstColumn(matrix, target);

  if (rowIndex < 0) {
    return false;
  }

  return binarySearchRow(matrix[rowIndex], target);
};
