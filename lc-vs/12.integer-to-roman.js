/*
 * @lc app=leetcode.cn id=12 lang=javascript
 * @lcpr version=30204
 *
 * [12] 整数转罗马数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 模拟
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//   if (!num || typeof num !== "number") {
//     return;
//   }

//   // 结合罗马数字的减法规则，模拟可组合的复合字符
//   const valueSymbol = [
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"],
//   ];

//   const resArr = [];

//   for (const [value, symbol] of valueSymbol) {
//     while (num >= value) {
//       num -= value;
//       resArr.push(symbol);
//     }
//     if (num === 0) {
//       break;
//     }
//   }

//   return resArr.join("");
// };

/**
 * 2. 硬编码
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//   if (!num || typeof num !== "number") {
//     return;
//   }

//   // 对每个数字对应的罗马字符硬编码
//   const thousands = ["", "M", "MM", "MMM"];
//   const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//   const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//   const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

//   return (
//     thousands[Math.floor(num / 1000)] +
//     hundreds[Math.floor((num % 1000) / 100)] +
//     tens[Math.floor((num % 100) / 10)] +
//     ones[Math.floor(num % 10)]
//   );
// };

/**
 * 1. 模拟
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//   if (!num || typeof num !== "number") {
//     return;
//   }

//   const valueSymbol = [
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"],
//   ];

//   const res = [];

//   for (const [val, key] of valueSymbol) {
//     while (num >= val) {
//       num -= val;
//       res.push(key);
//     }
//     if (num === 0) {
//       break;
//     }
//   }

//   return res.join("");
// };

/**
 * 2. 硬编码
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (!num || typeof num !== "number") {
    return;
  }

  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    thousands[Math.floor(num / 1000)] +
    hundreds[Math.floor((num % 1000) / 100)] +
    tens[Math.floor((num % 100) / 10)] +
    ones[num % 10]
  );
};
// @lc code=end

/*
// @lcpr case=start
// 3749\n
// @lcpr case=end

// @lcpr case=start
// 58\n
// @lcpr case=end

// @lcpr case=start
// 1994\n
// @lcpr case=end

 */
