/*
 * @lc app=leetcode.cn id=1316 lang=javascript
 * @lcpr version=30204
 *
 * [1316] 不同的循环子字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 枚举
 * @param {string} text
 * @return {number}
 */
// var distinctEchoSubstrings = function (text) {
//   if (!text || typeof text !== "string") {
//     return;
//   }

//   if (text.length === 1) {
//     return 1;
//   }

//   const set = new Set(),
//     length = text.length;
//   let ans = 0;

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       const l = j - i;
//       if (j * 2 - i <= length) {
//         const left = text.substr(i, l);
//         const right = text.substr(j, l);
//         if (left === right && !set.has(left)) {
//           ans++;
//           set.add(left);
//         }
//       }
//     }
//   }
//   return ans;
// };

/**
 * 2. kmp算法
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function (text) {
  if (!text || typeof text !== "string") {
    return;
  }

  if (text.length === 1) {
    return 1;
  }

  const n = text.length;
  const visited = new Set();
  let total = 0;

  function kmp(sub) {
    const len = sub.length;
    if (len < 2) return 0; // 长度小于2不可能有回声子串
    const pi = new Array(len).fill(0);
    let j = 0;
    let ans = 0;

    for (let i = 1; i < len; i++) {
      // KMP前缀函数计算
      while (j > 0 && sub[i] !== sub[j]) {
        j = pi[j - 1];
      }
      if (sub[i] === sub[j]) {
        j++;
      }
      pi[i] = j;

      // 检查回声子串条件
      const m = i + 1; // 当前前缀长度
      if (j !== 0 && m % (m - j) === 0) {
        const k = m / (m - j);
        if (k % 2 === 0) {
          const half = m / 2;
          const t = sub.substring(0, half);
          if (!visited.has(t)) {
            visited.add(t);
            ans++;
          }
        }
      }
    }
    return ans;
  }

  // 遍历所有起始位置
  for (let i = 0; i < n - 1; i++) {
    total += kmp(text.substring(i));
  }

  return total;
};

// @lc code=end

/*
// @lcpr case=start
// "abcabcabc"\n
// @lcpr case=end

// @lcpr case=start
// "leetcodeleetcode"\n
// @lcpr case=end

 */
