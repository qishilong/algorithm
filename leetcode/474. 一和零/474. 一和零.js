/**
 * 1. 回溯
 * 力扣会超时
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var findMaxForm = function (strs, m, n) {
//   if (!strs) {
//     return strs;
//   }

//   if (!Array.isArray(strs) || strs.length === 0 || m < 0 || n < 0 || (m === 0 && n === 0)) {
//     return 0;
//   }

//   let max = 0;
//   const path = [],
//     length = strs.length;

//   const isValidSubset = (subset, m, n) => {
//     let zeroCount = 0;
//     let oneCount = 0;

//     subset.forEach(item => {
//       for (const child of item) {
//         if (child === "0") {
//           zeroCount++;
//         } else if (child === "1") {
//           oneCount++;
//         }
//       }
//     });

//     return zeroCount <= m && oneCount <= n;
//   };

//   const backTracking = (path, m, n, index, strs) => {
//     if (index === length) {
//       return;
//     }
//     for (let i = index; i < length; i++) {
//       path.push(strs[i]);
//       if (isValidSubset(path, m, n)) {
//         max = Math.max(path.length, max);
//         backTracking(path, m, n, i + 1, strs);
//       }
//       path.pop();
//     }
//   };

//   backTracking(path, m, n, 0, strs);

//   return max;
// };

/**
 * 2. 动态规划
 * 01背包，滚动数组，二维数组
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var findMaxForm = function (strs, m, n) {
//   if (!strs) {
//     return strs;
//   }

//   if (!Array.isArray(strs) || strs.length === 0 || m < 0 || n < 0 || (m === 0 && n === 0)) {
//     return 0;
//   }

//   const length = strs.length;

//   const count = str => {
//     let zeroCount = 0,
//       oneCount = 0;
//     for (const item of str) {
//       if (item === "0") {
//         zeroCount++;
//       } else if (item === "1") {
//         oneCount++;
//       }
//     }

//     return { zeroCount, oneCount };
//   };

//   const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0)); // 默认初始化0

//   // 遍历物品
//   for (let i = 0; i < length; i++) {
//     const { zeroCount, oneCount } = count(strs[i]);
//     // 遍历背包容量，且从后往前遍历
//     for (let j = m; j >= zeroCount; j--) {
//       for (let k = n; k >= oneCount; k--) {
//         dp[j][k] = Math.max(dp[j][k], dp[j - zeroCount][k - oneCount] + 1);
//       }
//     }
//   }

//   return dp[m][n];
// };

/**
 * 3. 动态规划
 * 普通背包，三维数组
 * dp[i][j][k]: 前i个物品中, 背包的0容量为j, 1容量为k, 最多能放的物品数量
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  if (!strs) {
    return strs;
  }

  if (!Array.isArray(strs) || strs.length === 0 || m < 0 || n < 0 || (m === 0 && n === 0)) {
    return 0;
  }

  const length = strs.length;

  const count = str => {
    let zeroCount = 0,
      oneCount = 0;
    for (const item of str) {
      if (item === "0") {
        zeroCount++;
      } else if (item === "1") {
        oneCount++;
      }
    }

    return { zeroCount, oneCount };
  };

  // dp[i][j][k]: 前i个物品中, 背包的0容量为j, 1容量为k, 最多能放的物品数量
  const dp = new Array(length)
    .fill(0)
    .map(_ => new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0)));

  const { zeroCount, oneCount } = count(strs[0]);
  for (let i = zeroCount; i <= m; i++) {
    for (let j = oneCount; j <= n; j++) {
      dp[0][i][j] = 1;
    }
  }

  for (let i = 1; i < length; i++) {
    const { zeroCount, oneCount } = count(strs[i]);
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (j < zeroCount || k < oneCount) {
          dp[i][j][k] = dp[i - 1][j][k];
        } else {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeroCount][k - oneCount] + 1);
        }
      }
    }
  }

  return dp[dp.length - 1][m][n];
};
