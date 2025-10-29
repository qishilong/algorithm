/*
 * @lc app=leetcode.cn id=427 lang=javascript
 * @lcpr version=30204
 *
 * [427] 建立四叉树
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  if (!grid || !Array.isArray(grid) || grid.length === 0) {
    return;
  }
  if (grid.every((item) => item.length !== grid.length)) {
    return;
  }
  const dfs = (grid, r0, c0, r1, c1) => {
    let same = true;
    for (let i = r0; i < r1; i++) {
      for (let j = c0; j < c1; j++) {
        if (grid[i][j] !== grid[r0][c0]) {
          same = false;
          break;
        }
      }
      if (!same) {
        break;
      }
    }

    if (same) {
      return new _Node(grid[r0][c0] === 1, true);
    }

    // row, col
    const node = new _Node(
      true,
      false,
      dfs(grid, r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
      dfs(grid, r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
      dfs(grid, Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
      dfs(grid, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1),
    );

    return node;
  };

  return dfs(grid, 0, 0, grid.length, grid.length);
};
// @lc code=end

/*
// @lcpr case=start
// [[0,1],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]\n
// @lcpr case=end

 */
