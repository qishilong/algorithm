/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 遍历
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (typeof s !== "string") {
//     return;
//   }

//   if (!s) {
//     return 0;
//   }

//   const length = s.length;

//   if (length === 1 || (length === 2 && s[0] !== s[1])) {
//     return length;
//   }

//   let i = 0,
//     j = 0,
//     res = 0,
//     set = new Set();

//   while (i < length && j < length) {
//     const char = s[i];
//     if (set.has(char)) {
//       res = Math.max(res, set.size);
//       set = new Set();
//       ++j;
//       i = j;
//     } else {
//       set.add(char);
//       i++;
//     }
//   }

//   if (set.size) {
//     res = Math.max(res, set.size);
//   }

//   return res;
// };

/**
 * 2. 滑动窗口
 * Map
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (typeof s !== "string") {
//     return;
//   }

//   if (!s) {
//     return 0;
//   }

//   const length = s.length;

//   if (length === 1 || (length === 2 && s[0] !== s[1])) {
//     return length;
//   }

//   let left = 0, // 慢指针
//     right = 0, // 快指针
//     res = 0,
//     map = new Map();

//   while (right < length) {
//     const rightChar = s[right];

//     if (map.has(rightChar)) {
//       map.set(rightChar, map.get(rightChar) + 1);
//     } else {
//       map.set(rightChar, 1);
//     }

//     right++;

//     while (map.get(rightChar) > 1) {
//       const leftChar = s[left];
//       map.set(leftChar, map.get(leftChar) - 1);

//       left++;
//     }

//     res = Math.max(right - left, res);
//   }

//   return res;
// };

/**
 * 3. 滑动窗口
 * Set
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (typeof s !== "string") {
//     return;
//   }

//   if (!s) {
//     return 0;
//   }

//   const length = s.length;

//   if (length === 1 || (length === 2 && s[0] !== s[1])) {
//     return length;
//   }

//   let left = -1, // 快指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     res = 0,
//     set = new Set();

//   for (let i = 0; i < length; i++) {
//     if (i !== 0) {
//       // 左指针向右移动一位，移除一个字符
//       set.delete(s[i - 1]);
//     }

//     while (left + 1 < length && !set.has(s[left + 1])) {
//       set.add(s[left + 1]);
//       left++;
//     }

//     res = Math.max(left - i + 1, res);
//   }

//   return res;
// };

/**
 * 4. 滑动窗口
 * Set 优化，只遍历一次
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (typeof s !== "string") {
    return;
  }

  if (!s) {
    return 0;
  }

  const length = s.length;

  if (length === 1 || (length === 2 && s[0] !== s[1])) {
    return length;
  }

  let left = 0, // 慢指针
    right = 0, // 快指针
    res = 0,
    set = new Set();

  while (right < length) {
    const rightChar = s[right],
      leftChar = s[left];
    if (set.has(rightChar)) {
      set.delete(leftChar);
      left++;
    } else {
      set.add(rightChar);
      right++;
      res = Math.max(right - left, res);
    }
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */
