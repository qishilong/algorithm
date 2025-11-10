/*
 * @lc app=leetcode.cn id=1012 lang=javascript
 * @lcpr version=30204
 *
 * [1012] 至少有 1 位重复的数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 迭代
 * @param {number} n
 * @return {number}
 */
// var numDupDigitsAtMostN = function (n) {
//   if (n <= 0 || typeof n !== "number" || isNaN(n)) {
//     return 0;
//   }

//   if (Object.is(n, Infinity)) {
//     return Infinity;
//   }

//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     const set = new Set(),
//       val = String(i),
//       valLength = val.length;

//     for (let j = 0; j < valLength; j++) {
//       if (set.has(val[j])) {
//         count++;
//         j = valLength;
//       }
//       set.add(val[j]);
//     }
//   }

//   return count;
// };

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
  if (n <= 0 || typeof n !== "number" || isNaN(n)) {
    return 0;
  }

  if (Object.is(n, Infinity)) {
    return Infinity;
  }

  const sn = "" + n;
  dp = new Array(sn.length).fill(0).map(() => new Array(1 << 10).fill(-1));
  const f = (mask, sn, i, same) => {
    if (i === sn.length) {
      return 1;
    }
    if (!same && dp[i][mask] >= 0) {
      return dp[i][mask];
    }
    let res = 0,
      t = same ? sn[i].charCodeAt() - "0".charCodeAt() : 9;
    for (let k = 0; k <= t; k++) {
      if ((mask & (1 << k)) !== 0) {
        continue;
      }
      res += f(mask === 0 && k === 0 ? mask : mask | (1 << k), sn, i + 1, same && k === t);
    }
    if (!same) {
      dp[i][mask] = res;
    }
    return res;
  };
  return n + 1 - f(0, sn, 0, true);
};
// @lc code=end

/*
// @lcpr case=start
// 20\n
// @lcpr case=end

// @lcpr case=start
// 100\n
// @lcpr case=end

// @lcpr case=start
// 1000\n
// @lcpr case=end

 */
