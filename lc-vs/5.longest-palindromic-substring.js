/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30204
 *
 * [5] 最长回文子串
 */
// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 暴力搜索
 * （lc 超时）
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   if (typeof s !== "string" || !s.trim()) {
//     return;
//   }

//   if (s.length === 1 || (s.length === 2 && s[0] === s[1])) {
//     return s;
//   }

//   /**
//    * 判断是否是回文字符串
//    * @param {string} str
//    */
//   const isPalindromeString = (str) => {
//     let left = 0,
//       right = str.length - 1;

//     while (left <= right) {
//       if (str[left] !== str[right]) {
//         return false;
//       }
//       ++left;
//       --right;
//     }

//     return true;
//   };

//   let res = "";

//   const length = s.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = i; j < length; j++) {
//       const str = s.slice(i, j + 1);
//       if (isPalindromeString(str) && str.length > res.length) {
//         res = str;
//       }
//     }
//   }

//   return res;
// };

/**
 * 2. 中心扩展
 * 中心扩展算法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (typeof s !== "string" || !s.trim()) {
    return;
  }

  if (s.length === 1 || (s.length === 2 && s[0] === s[1])) {
    return s;
  }

  const length = s.length;
  let start = 0,
    end = 0;

  /**
   * @param {string} str
   * @param {number} left
   * @param {number} right
   * @returns {number}
   */
  const getPalindromeStr = (str, left, right) => {
    while (left >= 0 && right < length && str[left] === str[right]) {
      --left;
      ++right;
    }

    return right - left - 1;
  };

  for (let i = 0; i < length; i++) {
    const len1 = getPalindromeStr(s, i, i);
    const len2 = getPalindromeStr(s, i, i + 1);
    const maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2); // 左边界
      end = i + Math.floor(maxLen / 2); // 右边界
    }
  }

  return s.slice(start, end + 1);
};
// @lc code=end

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */
