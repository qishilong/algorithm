/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=30204
 *
 * [9] 回文数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 转换为字符串
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if ((x !== 0 && !x) || x < 0) {
//     return false;
//   }

//   if (x === 0) {
//     return true;
//   }

//   const strX = x + "";
//   let left = 0,
//     right = strX.length - 1;

//   let result = true;

//   while (left <= right) {
//     if (strX[left] !== strX[right]) {
//       return false;
//     } else {
//       left++;
//       right--;
//     }
//   }

//   return result;
// };

/**
 * 2. 获取每一位的数字
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if ((x !== 0 && !x) || x < 0) {
//     return false;
//   }

//   if (x === 0) {
//     return true;
//   }

//   let number = Math.abs(x);

//   const xArr = [];

//   while (number) {
//     xArr.unshift(number % 10);
//     number = Math.floor(number / 10);
//   }

//   let left = 0,
//     right = xArr.length - 1;

//   let result = true;

//   while (left <= right) {
//     if (xArr[left] !== xArr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return result;
// };

/**
 * 3. 数字转换为字符串
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if (typeof x !== "number") {
//     return;
//   }

//   if (x < 0) {
//     return false;
//   }

//   const xStr = String(x);

//   let left = 0,
//     right = xStr.length - 1;

//   while (left < right) {
//     if (xStr[left] !== xStr[right]) {
//       return false;
//     }
//     ++left;
//     --right;
//   }

//   return true;
// };

/**
 * 4. 获取每一位数字
 * 利用数组获取数字中的每一位数字
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (typeof x !== "number") {
    return;
  }

  if (x < 0) {
    return false;
  }

  const arr = [];

  while (x) {
    arr.unshift(x % 10);
    x = Math.floor(x / 10);
  }

  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    ++left;
    --right;
  }

  return true;
};
// @lc code=end

/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */
