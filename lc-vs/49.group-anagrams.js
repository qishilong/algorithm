/*
 * @lc app=leetcode.cn id=49 lang=javascript
 * @lcpr version=30204
 *
 * [49] 字母异位词分组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 计算模拟
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   if (!strs || !Array.isArray(strs)) {
//     return;
//   }

//   if (strs.length <= 1) {
//     return [strs];
//   }

//   const map = new Map();
//   const length = strs.length;

//   for (let i = 0; i < length; i++) {
//     const str = strs[i]
//       .split('')
//       .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
//       .join('');

//     if (map.has(str)) {
//       map.set(str, [...map.get(str), strs[i]]);
//     } else {
//       map.set(str, [strs[i]]);
//     }
//   }

//   return Array.from(map.values());
// };

/**
 * 1. 计数
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs || !Array.isArray(strs)) {
    return;
  }

  if (strs.length <= 1) {
    return [strs];
  }

  const map = new Map();
  const length = strs.length;

  for (let i = 0; i < length; i++) {
    const countArr = new Array(26).fill(0);

    for (const char of strs[i]) {
      ++countArr[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    const key = countArr.toString();
    if (map.has(key)) {
      map.set(key, [...map.get(key), strs[i]]);
    } else {
      map.set(key, [strs[i]]);
    }
  }

  return Array.from(map.values());
};

// @lc code=end

/*
// @lcpr case=start
// ["eat", "tea", "tan", "ate", "nat", "bat"]\n
// @lcpr case=end

// @lcpr case=start
// [""]\n
// @lcpr case=end

// @lcpr case=start
// ["a"]\n
// @lcpr case=end

 */
