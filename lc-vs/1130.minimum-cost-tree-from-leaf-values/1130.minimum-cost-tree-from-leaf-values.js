/*
 * @lc app=leetcode.cn id=1130 lang=javascript
 * @lcpr version=30204
 *
 * [1130] 叶值的最小代价生成树
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 单调栈 I
 * @param {number[]} arr
 * @return {number}
 */
// var mctFromLeafValues = function (arr) {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//     return;
//   }

//   if (arr.length === 1) {
//     return arr[0];
//   }

//   if (arr.length === 2) {
//     return arr[0] * arr[1];
//   }

//   let res = 0;
//   const stack = [];
//   for (const left of arr) {
//     while (stack.length && stack[stack.length - 1] <= left) {
//       const right = stack.pop();
//       if (!stack.length || stack[stack.length - 1] > left) {
//         res += right * left;
//       } else {
//         res += stack[stack.length - 1] * right;
//       }
//     }
//     stack.push(left);
//   }

//   while (stack.length >= 2) {
//     let left = stack.pop();
//     res += stack[stack.length - 1] * left;
//   }

//   return res;
// };

/**
 * 2. 单调栈 II
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    return;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    return arr[0] * arr[1];
  }

  let res = 0;
  const stack = [Infinity];
  for (const val of arr) {
    while (val > stack[stack.length - 1]) {
      res += stack.pop() * Math.min(stack[stack.length - 1], val);
    }
    stack.push(val);
  }

  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1];
  }

  return res;
};

// @lc code=end

/*
// @lcpr case=start
// [6,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [4,11]\n
// @lcpr case=end

 */
