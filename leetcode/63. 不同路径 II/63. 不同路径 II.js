/**
 * 1. 动态规划
 * 二维dp数组
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function (obstacleGrid) {
//   if (!obstacleGrid) {
//     return 0;
//   }
//   if (
//     Array.isArray(obstacleGrid) &&
//     (obstacleGrid.length === 0 ||
//       !obstacleGrid.every((item) => Array.isArray(item) && item.length > 0))
//   ) {
//     return 0;
//   }

//   const m = obstacleGrid.length,
//     n = obstacleGrid[0].length;

//   // 如果在起点或者终点处出现了障碍，直接返回0
//   if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
//     return 0;
//   }

//   // 构建二维dp数组
//   const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

//   // dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，但如果(i, 0) 这条边有了障碍之后，障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0，所以需要加一个obstacleGrid[i][0] === 0的判断
//   for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
//     dp[i][0] = 1;
//   }
//   // dp[0][j]一定都是1，因为从(0, 0)的位置到(0, j)的路径只有一条，但如果(0, j) 这条边有了障碍之后，障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[0][j]应该还是初始值0，所以需要加一个obstacleGrid[0][j] === 0的判断
//   for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
//     dp[0][j] = 1;
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (obstacleGrid[i][j] === 1) {
//         continue;
//       }
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }

//   return dp[m - 1][n - 1];
// };

/**
 * 2. 动态规划
 * 一维dp数组（滚动数组）
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid) {
    return 0;
  }
  if (
    Array.isArray(obstacleGrid) &&
    (obstacleGrid.length === 0 ||
      !obstacleGrid.every((item) => Array.isArray(item) && item.length > 0))
  ) {
    return 0;
  }

  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;

  // 如果在起点或者终点处出现了障碍，直接返回0
  if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
    return 0;
  }

  // 构建一维dp数组
  const dp = new Array(n).fill(0);

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      dp[j] = 0;
    } else if (j === 0) {
      dp[j] = 1;
    } else {
      dp[j] = dp[j - 1];
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      } else if (j !== 0) {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  }

  return dp[n - 1];
};
