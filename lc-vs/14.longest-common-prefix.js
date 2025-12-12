/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30204
 *
 * [14] 最长公共前缀
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (
    !strs ||
    !Array.isArray(strs) ||
    strs.length === 0 ||
    strs.some((item) => typeof item !== "string")
  ) {
    return;
  }

  const minStrLength = Math.min(...strs.map((item) => item.length));

  if (minStrLength === 0) {
    return "";
  }

  let res = "",
    end = false;

  for (let i = 0; i < minStrLength; i++) {
    const char = strs[0][i];
    strs.forEach((item) => {
      if (item[i] !== char) {
        end = true;
      }
    });
    if (end) {
      return res;
    }
    res += char;
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */
