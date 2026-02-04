/**
 * 1. 深度搜索
 * 力扣运行超时
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   if (!m || !n) {
//     return 0;
//   }

//   // 当 m === 1 && n === 1 的时候，也可以视为有一条路径
//   if (m === 1 || n === 1) {
//     return 1;
//   }

//   if (m === 2 && n === 2) {
//     return 2;
//   }

//   const dfs = (i, j, m, n) => {
//     // 越界了
//     if (i > m || j > n) {
//       return 0;
//     }

//     // 找到了一种方法，相当于找到了叶子节点
//     if (i === m && j === n) {
//       return 1;
//     }

//     return dfs(i + 1, j, m, n) + dfs(i, j + 1, m, n);
//   };

//   return dfs(1, 1, m, n);
// };

/**
 * 2. 动态规划
 * 二维dp数组
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   if (!m || !n) {
//     return 0;
//   }

//   // 当 m === 1 && n === 1 的时候，也可以视为有一条路径
//   if (m === 1 || n === 1) {
//     return 1;
//   }

//   if (m === 2 && n === 2) {
//     return 2;
//   }

//   // 初始化二维dp数组
//   const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

//   // dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条
//   for (let i = 0; i < m; i++) {
//     dp[i][0] = 1;
//   }
//   // dp[0][j]一定都是1，因为从(0, 0)的位置到(0, j)的路径只有一条
//   for (let j = 0; j < n; j++) {
//     dp[0][j] = 1;
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//     }
//   }

//   return dp[m - 1][n - 1];
// };

/**
 * 3. 动态规划
 * 一维dp数组（也可以称之为滚动数组）
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   if (!m || !n) {
//     return 0;
//   }

//   // 当 m === 1 && n === 1 的时候，也可以视为有一条路径
//   if (m === 1 || n === 1) {
//     return 1;
//   }

//   if (m === 2 && n === 2) {
//     return 2;
//   }

//   // 初始化一维dp数组
//   const dp = new Array(n).fill(1);

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[j] += dp[j - 1];
//     }
//   }
//   return dp[n - 1];
// };

/**
 * 4. 数论方法
 * 了解就好
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (!m || !n) {
    return 0;
  }

  // 当 m === 1 && n === 1 的时候，也可以视为有一条路径
  if (m === 1 || n === 1) {
    return 1;
  }

  if (m === 2 && n === 2) {
    return 2;
  }

  let numerator = 1, // 分子
    denominator = m - 1, // 分母
    count = m - 1,
    t = m + n - 2;

  while (count--) {
    numerator *= t--;
    while (denominator !== 0 && numerator % denominator === 0) {
      numerator /= denominator;
      denominator--;
    }
  }

  return numerator;
};
