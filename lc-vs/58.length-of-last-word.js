/*
 * @lc app=leetcode.cn id=58 lang=javascript
 * @lcpr version=30204
 *
 * [58] 最后一个单词的长度
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   if (!s || typeof s !== "string" || !s.trim()) {
//     return;
//   }

//   const arr = s.trim().split(" ");

//   return arr[arr.length - 1].length;
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s || typeof s !== 'string' || !s.trim()) {
    return;
  }

  const arr = s.trim().split(' ');

  return arr[arr.length - 1].length;
};

// const s = "Hello World";
// const res = lengthOfLastWord(s);
// console.log(res);

// @lc code=end

/*
// @lcpr case=start
// "Hello World"\n
// @lcpr case=end

// @lcpr case=start
// "   fly me   to   the moon  "\n
// @lcpr case=end

// @lcpr case=start
// "luffy is still joyboy"\n
// @lcpr case=end

 */
