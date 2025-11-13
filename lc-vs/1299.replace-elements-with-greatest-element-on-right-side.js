/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 * @lcpr version=30204
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 迭代
 * leetcode 会超时
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function (arr) {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//     return;
//   }

//   if (arr.length === 1) {
//     return [-1];
//   }

//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     if (i === length - 1) {
//       arr[i] = -1;
//       continue;
//     }
//     const rightMax = Math.max(...arr.slice(i + 1));

//     arr[i] = rightMax;
//   }

//   return arr;
// };

/**
 * 2. 倒序遍历
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    return;
  }

  if (arr.length === 1) {
    return [-1];
  }

  const length = arr.length,
    ans = new Array(length).fill(-Infinity);

  ans[length - 1] = -1;

  for (let i = length - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i + 1], arr[i + 1]);
  }

  return ans;
};
// @lc code=end

/*
// @lcpr case=start
// [17,18,5,4,6,1]\n
// @lcpr case=end

// @lcpr case=start
// [400]\n
// @lcpr case=end

 */
