/**
 * 1. 贪心
 * @param {number[]} nums
 * @return {number}
 */
// var wiggleMaxLength = function (nums) {
//   if (nums.length <= 1) {
//     return nums.length;
//   }

//   let curDiff = 0, // 记录当前一对差值
//     preDiff = 0, // 记录前一对差值
//     result = 1; // 记录峰值个数，序列默认序列最右边有一个峰值

//   for (let i = 0, length = nums.length; i < length - 1; i++) {
//     curDiff = nums[i + 1] - nums[i]; // 计算下一个元素与当前元素的差值

//     // 出现峰值
//     if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
//       result++;
//       preDiff = curDiff; // 注意这里，只在摆动变化的时候更新preDiff
//     }
//   }

//   return result;
// };

/**
 * 2. 动态规划（版本一）
 * @param {number[]} nums
 * @return {number}
 */
// var wiggleMaxLength = function (nums) {
//   if (nums.length <= 1) {
//     return nums.length;
//   }

//   const dp = new Array(nums.length).fill(0).map(() => new Array(2).fill(0)), // 创建二维数组dp，用户记录摆动序列的最大长度
//     length = nums.length;

//   dp[0][0] = dp[0][1] = 1; // 初始条件，序列中的第一个元素默认为峰值，最小长度为1

//   for (let i = 0; i < length; i++) {
//     dp[i][0] = dp[i][1] = 1; // 初始化当前位置的dp值为1
//     for (let j = 0; j < i; j++) {
//       // 如果前一个数比当前数大，可以形成一个上升峰值，更新dp[i][1]
//       if (nums[j] > nums[i]) {
//         dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
//       }
//       // 如果前一个数比当前数小，可以形成一个下降峰值，更新dp[i][0]
//       if (nums[j] < nums[i]) {
//         dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
//       }
//     }
//   }

//   // 返回最大的摆动序列长度
//   return Math.max(dp[length - 1][0], dp[length - 1][1]);
// };

/**
 * 3. 动态规划（版本二）
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let up = 1, // 记录上升摆动序列的最大长度
    down = 1; // 记录下将摆动序列的最大长度
  for (let i = 0, length = nums.length; i < length; i++) {
    // 如果当前数比前一个数大，则可以形成一个上升峰值
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    }
    // 如果当前数比前一个数小，则可以形成一个下降峰值
    if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }

  // 返回上升和下降摆动序列的最大长度
  return Math.max(up, down);
};
