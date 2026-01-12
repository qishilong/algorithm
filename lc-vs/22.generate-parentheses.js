/*
 * @lc app=leetcode.cn id=22 lang=javascript
 * @lcpr version=30204
 *
 * [22] 括号生成
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 暴力解法
 * 先递归求出所有可以组成的括号字符串，然后在收集符合要求的括号对
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   if (typeof n !== "number" || n < 0) {
//     return;
//   }

//   if (n === 0) {
//     return [];
//   }

//   /**
//    * 验证是否是符合要求的字符串数组
//    * @param {string[]} charArr
//    */
//   const valid = charArr => {
//     let count = 0;

//     const length = charArr.length;

//     for (let i = 0; i < length; i++) {
//       const currentChar = charArr[i];
//       if (currentChar === "(") {
//         count++;
//       } else {
//         count--;
//       }

//       if (count < 0) {
//         return false;
//       }
//     }

//     return count === 0;
//   };

//   const result = [];

//   /**
//    * 生成所有的符合要求的括号对
//    * @param {string[]} path
//    * @param {number} index
//    * @param {result[]} result
//    * @returns
//    */
//   const generateAll = (path, index, result) => {
//     if (index === path.length) {
//       if (valid(path)) {
//         return result.push(path.join(""));
//       }
//     } else {
//       path[index] = "(";
//       generateAll(path, index + 1, result);
//       path[index] = ")";
//       generateAll(path, index + 1, result);
//     }
//   };

//   generateAll(new Array(2 * n), 0, result);

//   return result;
// };

/**
 * 2. 回溯
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   if (typeof n !== "number" || n < 0) {
//     return;
//   }

//   if (n === 0) {
//     return [];
//   }

//   const result = [];

//   /**
//    * 验证括号字符串是否符合要求
//    * @param {string[]} charArr
//    */
//   const valid = charArr => {
//     let count = 0;
//     const length = charArr.length;

//     for (let i = 0; i < length; i++) {
//       const currentChar = charArr[i];

//       if (currentChar === "(") {
//         ++count;
//       } else {
//         --count;
//       }

//       if (count < 0) {
//         return false;
//       }
//     }

//     return count === 0;
//   };

//   /**
//    * 回溯
//    * @param {string[]} result
//    * @param {string[]} path
//    * @param {number} left
//    * @param {number} right
//    * @param {number} n
//    */
//   const backtracking = (result, path, left, right, n) => {
//     if (path.length === 2 * n && valid(path)) {
//       result.push(path.join(""));
//       return;
//     }

//     if (left < n) {
//       path.push("(");
//       backtracking(result, path, left + 1, right, n);
//       path.pop();
//     }

//     if (right < n) {
//       path.push(")");
//       backtracking(result, path, left, right + 1, n);
//       path.pop();
//     }
//   };

//   backtracking(result, [], 0, 0, n);

//   return result;
// };

/**
 * 3. 计数（统计）类的分治问题
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (typeof n !== "number" || n < 0) {
    return;
  }

  if (n === 0) {
    return [""];
  }

  // 记忆化，避免计算重复的 generateParenthesis(n)
  const memory = new Array(n * 2);
  if (memory[n]) {
    return memory[n];
  }

  const result = [];

  /**
   * 划分子问题标准：第一个子问题，作为不可分割的整体
   * 分段方法：(a)b
   * (a): k 对括号，子问题a是k-1对括号
   * b: n-k 对括号
   *
   * (a)b
   * ((())) 拆分为 a=(()), b=""
   * (())() 拆分为 a=(), b=()
   * ()()() 拆分为 a="", b=()()
   */
  for (let i = 1; i <= n; i++) {
    // 不同 k 之间，加法原理
    const resultA = generateParenthesis(i - 1);
    const resultB = generateParenthesis(n - i);

    // 左右两个子问题，乘法原理
    for (const a of resultA) {
      for (const b of resultB) {
        result.push(`(${a})${b}`);
      }
    }
  }

  memory[n] = result;

  return result;
};

// const n = 3;
// const result = generateParenthesis(3);
// console.log(result);

// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
