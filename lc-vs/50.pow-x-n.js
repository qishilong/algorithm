/*
 * @lc app=leetcode.cn id=50 lang=javascript
 * @lcpr version=30204
 *
 * [50] Pow(x, n)
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 快速幂+递归
 * 快速幂算法的本质是分治算法。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//   if (typeof x !== 'number' || typeof n !== 'number') {
//     return;
//   }

//   if (x === 0) {
//     return 0;
//   }

//   if (n === 0) {
//     return 1;
//   }

//   /**
//    * 分治求乘积
//    * @param {number} x
//    * @param {number} decomposeN
//    * @returns
//    */
//   const decompose = (x, decomposeN) => {
//     if (decomposeN === 0) {
//       return 1;
//     }

//     const y = decompose(x, Math.floor(decomposeN / 2));

//     return decomposeN % 2 === 0 ? y * y : y * y * x;
//   };

//   return n >= 0 ? decompose(x, n) : 1 / decompose(x, -n);
// };

/**
 * 2. 快速幂+迭代
 * 快速幂算法的本质是分治算法。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (typeof x !== 'number' || typeof n !== 'number') {
    return;
  }

  if (x === 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  /**
   * 分治求乘积
   * @param {number} x
   * @param {number} decomposeN
   * @returns
   */
  const decompose = (x, decomposeN) => {
    let res = 1,
      xContribute = x; // 贡献的初始值为 x

    // 在对 decomposeN 进行二进制拆分的同时计算答案
    while (decomposeN > 0) {
      if (decomposeN % 2 === 1) {
        // 如果 decomposeN 二进制表示的最低位为 1，那么需要计入贡献
        res *= xContribute;
      }

      // 将贡献不断地平方
      xContribute *= xContribute;

      // 舍弃 decomposeN 二进制表示的最低位，这样我们每次只要判断最低位即可
      decomposeN = Math.floor(decomposeN / 2);
    }

    return res;
  };

  return n >= 0 ? decompose(x, n) : 1 / decompose(x, -n);
};

// @lc code=end

/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */
