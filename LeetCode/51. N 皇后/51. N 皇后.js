/**
 * 回溯
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 安全性检查
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [["Q"]];
  }

  const chessboard = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const result = [];

  /**
   * @param {*} n 输入的棋盘的大小
   * @param {*} row 当前递归到棋盘的第几行了
   * @param {*} chessboard
   * @returns
   */
  const backtracking = (n, row, chessboard) => {
    if (row === n) {
      result.push(getBoardString(chessboard));
      return;
    }
    for (let col = 0; col < n; col++) {
      // 验证合法就可以放
      if (isValid(row, col, chessboard, n)) {
        chessboard[row][col] = "Q"; // 放置皇后
        backtracking(n, row + 1, chessboard);
        chessboard[row][col] = "."; // 回溯，撤销放置皇后操作
      }
    }
  };

  // 合法性验证
  const isValid = (row, col, chessboard, n) => {
    // 边界检查
    if (col < 0 || col >= n || row < 0 || row >= n) {
      return false;
    }

    // 检查列
    for (let i = 0; i < row; i++) {
      if (chessboard[i][col] === "Q") {
        return false;
      }
    }

    // 检查 45 度角是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessboard[i][j] === "Q") {
        return false;
      }
    }

    // 检查 135 度角是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessboard[i][j] === "Q") {
        return false;
      }
    }

    return true;
  };

  // 将棋盘行数据转换成字符串格式
  const getBoardString = (chessboard) => {
    const res = [];
    for (const row of chessboard) {
      res.push(row.join(""));
    }
    return res;
  };

  backtracking(n, 0, chessboard);

  return result;
};
