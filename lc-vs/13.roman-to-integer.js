/*
 * @lc app=leetcode.cn id=13 lang=javascript
 * @lcpr version=30204
 *
 * [13] 罗马数字转整数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 模拟
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   if (!s || typeof s !== "string" || !s.trim()) {
//     return;
//   }

//   const map = new Map();
//   map.set("M", 1000);
//   map.set("CM", 900);
//   map.set("D", 500);
//   map.set("CD", 400);
//   map.set("C", 100);
//   map.set("XC", 90);
//   map.set("L", 50);
//   map.set("XL", 40);
//   map.set("X", 10);
//   map.set("IX", 9);
//   map.set("V", 5);
//   map.set("IV", 4);
//   map.set("I", 1);

//   let res = 0;

//   const length = s.length;

//   for (let i = 0; i < length; ) {
//     if (i + 1 < length && map.has(s[i] + s[i + 1])) {
//       res += map.get(s[i] + s[i + 1]);
//       i += 2;
//     } else {
//       res += map.get(s[i]);
//       ++i;
//     }
//   }

//   return res;
// };

/**
 * XIV = 10 - 1 + 5 = 14
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (!s || typeof s !== "string" || !s.trim()) {
    return;
  }

  const map = new Map();
  map.set("M", 1000);
  map.set("D", 500);
  map.set("C", 100);
  map.set("L", 50);
  map.set("X", 10);
  map.set("V", 5);
  map.set("I", 1);

  let res = 0;

  const length = s.length;

  for (let i = 0; i < length; i++) {
    const val = map.get(s[i]);
    if (i + 1 < length && val < map.get(s[i + 1])) {
      res -= val;
    } else {
      res += val;
    }
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */
