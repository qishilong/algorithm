/**
 * 1. 迭代遍历
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   if (
//     !matrix ||
//     !Array.isArray(matrix) ||
//     matrix.length === 0 ||
//     matrix.some(item => !item || !Array.isArray(item))
//   ) {
//     return;
//   }

//   const m = matrix.length,
//     n = matrix[0].length;

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === target) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

/**
 * 2. 利用二分查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   if (
//     !matrix ||
//     !Array.isArray(matrix) ||
//     matrix.length === 0 ||
//     matrix.some(item => !item || !Array.isArray(item))
//   ) {
//     return;
//   }

//   const binarySearch = (nums, target) => {
//     let left = 0,
//       right = nums.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((right - left) / 2) + left;
//       const midNum = nums[mid];

//       if (midNum === target) {
//         return mid;
//       } else if (midNum > target) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     return -1;
//   };

//   for (const row of matrix) {
//     const res = binarySearch(row, target);
//     if (res >= 0) {
//       return true;
//     }
//   }

//   return false;
// };

/**
 * 3. Z 字形查找
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
    return;
  }

  const m = matrix.length,
    n = matrix[0].length;
  let x = 0,
    y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      --y;
    } else {
      ++x;
    }
  }
  return false;
};
