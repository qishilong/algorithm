/*
 * @lc app=leetcode.cn id=1163 lang=javascript
 * @lcpr version=30204
 *
 * [1163] 按字典序排在最后的子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 迭代
 * 找出字符串中第一个最大的字符
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
  if (!s || typeof s !== "string" || s.length === 0) {
    return "";
  }
  const maxChar = s.split("").reduce((max, char) => (char > max ? char : max), "");

  const length = s.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    if (s[i] === maxChar) {
      const str = s.slice(i);
      if (str > result) {
        result = str;
      }
    }
  }

  return result;
};
// @lc code=end

/*
// @lcpr case=start
// "abab"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

 */
