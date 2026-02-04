/*
 * @lc app=leetcode.cn id=36 lang=javascript
 * @lcpr version=30204
 *
 * [36] 有效的数独
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

/**
 * 有效的数独满足以下三个条件：
 * 1. 同一个数字在每一行只能出现一次
 * 2. 同一个数字在每一列只能出现一次
 * 3. 同一个数字在每一个小九宫格只能出现一次
 */

/**
 * 1. 逐个条件验证
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function (board) {
//   if (
//     !board ||
//     !Array.isArray(board) ||
//     board.some(item => !item) ||
//     board.some(item => !Array.isArray(item))
//   ) {
//     return;
//   }

//   if (board.length === 0 || board.some(item => item.length === 0)) {
//     return false;
//   }

//   const rowLength = board[0].length,
//     colLength = board.length;

//   /**
//    * 验证条件
//    * @param {number} i
//    * @param {number} j
//    */
//   const validFn = (i, j) => {
//     // 验证一行
//     for (let k = 0; k < rowLength; k++) {
//       if (board[i][k] === board[i][j] && k !== j) {
//         return false;
//       }
//     }

//     // 验证一列
//     for (let k = 0; k < colLength; k++) {
//       if (board[k][j] === board[i][j] && k !== i) {
//         return false;
//       }
//     }

//     // (5 / 3 = 1) * 3
//     const col = Math.floor(i / 3) * 3,
//       row = Math.floor(j / 3) * 3;

//     // 验证 3 * 3 九宫格
//     for (let k1 = col; k1 < col + 3; k1++) {
//       for (let k2 = row; k2 < row + 3; k2++) {
//         if (board[k1][k2] === board[i][j] && k1 !== i && k2 !== j) {
//           return false;
//         }
//       }
//     }

//     return true;
//   };

//   for (let i = 0; i < colLength; i++) {
//     for (let j = 0; j < rowLength; j++) {
//       if (board[i][j] >= "0" && board[i][j] <= "9") {
//         if (!validFn(i, j)) {
//           return false;
//         }
//       }
//     }
//   }

//   return true;
// };

/**
 * 2. 一次遍历
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (
    !board ||
    !Array.isArray(board) ||
    board.some(item => !item) ||
    board.some(item => !Array.isArray(item))
  ) {
    return;
  }

  if (board.length === 0 || board.some(item => item.length === 0)) {
    return false;
  }

  const rowLength = board[0].length,
    colLength = board.length;

  const cols = new Array(colLength).fill(0).map(() => new Array(9).fill(0));
  const rows = new Array(rowLength).fill(0).map(() => new Array(9).fill(0));
  const sudoku = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      const char = board[i][j];
      if (char !== ".") {
        const index = char.charCodeAt() - "0".charCodeAt() - 1;
        cols[i][index]++;
        rows[j][index]++;
        sudoku[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
        if (
          cols[i][index] > 1 ||
          rows[j][index] > 1 ||
          sudoku[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false;
        }
      }
    }
  }

  return true;
};
// @lc code=end

/*
// @lcpr case=start
// [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

// @lcpr case=start
// [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]\n
// @lcpr case=end

 */
