/**
 * 回溯
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  if (!board || !board.length) {
    return [[]];
  }

  const row = board.length, // 行数
    col = board[0].length; // 列数

  const backtracking = (board) => {
    // 遍历行
    for (let i = 0; i < row; i++) {
      // 遍历列
      for (let j = 0; j < col; j++) {
        if (board[i][j] === ".") {
          for (let k = 1; k <= 9; k++) {
            const strK = String(k);
            // 检查这个位置放置 K 是否合适
            if (isValid(i, j, strK, board)) {
              // 放置 K
              board[i][j] = strK;
              // 如果找到一组合适的立即返回
              if (backtracking(board)) {
                return true;
              }
              // 回溯，撤销放置 K
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    // 如果遍历完没有返回 false，说明找到了合适棋盘位置了
    return true;
  };

  const isValid = (curRow, curCol, val, board) => {
    // 判断行里是否有重复
    for (let i = 0; i < col; i++) {
      if (board[curRow][i] === val) {
        return false;
      }
    }

    // 判断列里是否有重复
    for (let i = 0; i < row; i++) {
      if (board[i][curCol] === val) {
        return false;
      }
    }

    // 判断 9 宫格里是否有重复
    const startRow = Math.floor(curRow / 3) * 3; // 计算子格的起始行
    const startCol = Math.floor(curCol / 3) * 3; // 计算子格的起始列
    // 从 startRow 递增到 startRow + 2，即遍历子行的每一行
    for (let i = startRow; i < startRow + 3; i++) {
      // 从 startCol递增到 startCol + 2，即遍历子列的每一列
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) {
          return false;
        }
      }
    }

    // 说明可以放置
    return true;
  };

  backtracking(board);
};
