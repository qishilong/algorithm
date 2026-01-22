/*
 * @lc app=leetcode.cn id=28 lang=javascript
 * @lcpr version=30204
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (
    !haystack ||
    !needle ||
    typeof haystack !== "string" ||
    typeof needle !== "string" ||
    !haystack.trim() ||
    !needle.trim()
  ) {
    return -1;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  if (haystack === needle || haystack.slice(0, needle.length) === needle) {
    return 0;
  }

  const haystackLength = haystack.length,
    needleLength = needle.length;

  for (let i = 0; i < haystackLength; i++) {
    if (
      haystack[i] === needle[0] &&
      i + needleLength <= haystackLength &&
      haystack.slice(i, i + needleLength) === needle
    ) {
      return i;
    }
  }

  return -1;
};
// @lc code=end

/*
// @lcpr case=start
// "sadbutsad"\n"sad"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n"leeto"\n
// @lcpr case=end

 */
