/**
 * 1. 滑动窗口
 * Set
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (!s || typeof s !== "string") return 0;
//   if (s.length === 1) {
//     return 1;
//   }

//   if (s.length === 2 && s[0] !== s[1]) {
//     return 2;
//   }

//   let left = -1, // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     res = 0;
//   const length = s.length,
//     set = new Set(); // 哈希集合，记录每个字符是否出现过

//   for (let i = 0; i < length; i++) {
//     if (i != 0) {
//       // 左指针向右移动一格，移除一个字符
//       set.delete(s.charAt(i - 1));
//     }

//     while (left + 1 < length && !set.has(s.charAt(left + 1))) {
//       // 不断地移动右指针
//       set.add(s.charAt(left + 1));
//       left++;
//     }

//     // 第 i 到 rk 个字符是一个极长的无重复字符子串
//     res = Math.max(left - i + 1, res);
//   }

//   return res;
// };

/**
 * 2. 滑动窗口
 * Set 一次遍历
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (!s || typeof s !== "string") return 0;
//   if (s.length === 1) {
//     return 1;
//   }

//   if (s.length === 2 && s[0] !== s[1]) {
//     return 2;
//   }

//   let right = 0,
//     left = 0, // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     res = 0;
//   const length = s.length,
//     set = new Set(); // 哈希集合，记录每个字符是否出现过

//   while (right < length) {
//     if (set.has(s.charAt(right))) {
//       set.delete(s.charAt(left));
//       left++;
//     } else {
//       set.add(s.charAt(right));
//       right++;
//       res = Math.max(res, right - left);
//     }
//   }

//   return res;
// };

/**
 * 3. 滑动窗口
 * Map
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || typeof s !== "string") return 0;
  if (s.length === 1) {
    return 1;
  }

  if (s.length === 2 && s[0] !== s[1]) {
    return 2;
  }

  let right = 0,
    left = 0, // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    res = 0;
  const length = s.length,
    map = new Map(); // 哈希集合，记录每个字符是否出现过

  while (right < length) {
    const curStr = s.charAt(right);
    right++;
    if (map.has(curStr)) {
      map.set(curStr, map.get(curStr) + 1);
    } else {
      map.set(curStr, 1);
    }

    while (map.get(curStr) > 1) {
      const leftStr = s.charAt(left);
      left++;
      map.set(leftStr, map.get(leftStr) - 1);
    }

    res = Math.max(res, right - left);
  }

  return res;
};
