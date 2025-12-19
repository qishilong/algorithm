/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30204
 *
 * [11] 盛最多水的容器
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 暴力解法
 * (lc 会超时)
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   if (!Array.isArray(height) || height.length === 0) {
//     return;
//   }

//   const length = height.length;

//   if (length === 1) {
//     return 0;
//   }

//   if (length === 2) {
//     return Math.min(...height);
//   }

//   let max = 0;

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       const offset = j - i;
//       const min = Math.min(height[i], height[j]);
//       const val = offset * min;

//       if (val > max) {
//         max = val;
//       }
//     }
//   }

//   return max;
// };

/**
 * 2. 双指针
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!Array.isArray(height) || height.length === 0) {
    return;
  }

  const length = height.length;

  if (length === 1) {
    return 0;
  }

  if (length === 2) {
    return Math.min(...height);
  }

  let max = 0,
    left = 0,
    right = length - 1;

  while (left < right) {
    const leftVal = height[left],
      rightVal = height[right];

    const val = (right - left) * Math.min(leftVal, rightVal);
    if (val > max) {
      max = val;
    }

    if (leftVal <= rightVal) {
      ++left;
    } else {
      --right;
    }
  }

  return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const res = maxArea(height);
console.log(res);
// @lc code=end

/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */
