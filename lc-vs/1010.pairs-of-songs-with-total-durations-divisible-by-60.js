/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 * @lcpr version=30204
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 方法一：暴搜
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function (time) {
//   if (!time || !Array.isArray(time) || time.length === 0) {
//     return 0;
//   }
//   const length = time.length;
//   let count = 0;

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if ((time[i] + time[j]) % 60 === 0) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

/**
 * 方法二：回溯计算
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function (time) {
//   if (!time || !Array.isArray(time) || time.length <= 1) {
//     return 0;
//   }
//   const length = time.length,
//     path = [];
//   let count = 0;

//   const backtracking = (arr, startIndex) => {
//     if (path.length === 2) {
//       if ((path[0] + path[1]) % 60 === 0) {
//         count++;
//       }
//       return;
//     }

//     for (let i = startIndex; i < length; i++) {
//       path.push(arr[i]);
//       backtracking(arr, i + 1);
//       path.pop();
//     }
//   };

//   backtracking(time, 0);

//   return count;
// };

/**
 * 方法三：对数
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  if (!time || !Array.isArray(time) || time.length <= 1) {
    return 0;
  }
  const length = time.length;
  const modArr = new Array(60).fill(0);
  let count = 0;

  for (let i = 0; i < length; i++) {
    modArr[time[i] % 60]++;
  }

  for (let i = 1; i < 30; i++) {
    count += modArr[i] * modArr[60 - i]; // 计算结果包括 (0,30), (30,60) 的所有组合
  }

  count += (modArr[0] * (modArr[0] - 1)) / 2 + (modArr[30] * (modArr[30] - 1)) / 2;

  return count;
};

// @lc code=end

/*
// @lcpr case=start
// [30,20,150,100,40]\n
// @lcpr case=end

// @lcpr case=start
// [60,60,60]\n
// @lcpr case=end

 */
