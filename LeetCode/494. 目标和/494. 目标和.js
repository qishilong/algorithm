/**
 * 1. 回溯
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function (nums, target) {
//   if (!nums || !target || nums.length === 0) {
//     return 0;
//   }
//   if (nums.length === 1 && nums[0] === target) {
//     return 1;
//   }

//   const result = [],
//     path = [],
//     length = nums.length;

//   nums = nums.sort((a, b) => a - b);
//   const sum = nums.reduce((prev, curr) => prev + curr, 0);

//   // left = (sum + target)/2
//   // 说明此时没有方案，直接返回 0
//   if (sum < Math.abs(target) || (sum + target) % 2 === 1) {
//     return 0;
//   }

//   const bagSize = (sum + target) / 2;

//   const backtrack = (candidates, target, sum, startIndex) => {
//     if (sum === target) {
//       result.push([...path]);
//       return;
//     }
//     // 如果 sum + candidates[i] > target 就终止遍历
//     for (let i = startIndex; i < length && sum + candidates[i] <= target; i++) {
//       sum += candidates[i];
//       path.push(candidates[i]);
//       backtrack(candidates, target, sum, i + 1);
//       sum -= candidates[i];
//       path.pop();
//     }
//   };

//   backtrack(nums, bagSize, 0, 0);

//   return result.length;
// };

/**
 * 2. 动态规划（二维dp数组）
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function (nums, target) {
//   if (!nums || (target !== 0 && !target) || nums.length === 0) {
//     return 0;
//   }

//   const sum = nums.reduce((prev, curr) => prev + curr, 0);

//   // left = (sum + target)/2
//   // 说明此时没有方案，直接返回 0
//   if (Math.abs(target) > sum || (sum + target) % 2 === 1) {
//     return 0;
//   }

//   const bagSize = (sum + target) / 2;

//   const length = nums.length;

//   // 创建二维dp数组
//   const dp = new Array(length).fill(0).map(item => new Array(bagSize + 1).fill(0));

//   // 初始化最上行
//   if (nums[0] <= bagSize) {
//     dp[0][nums[0]] = 1;
//   }

//   // 初始化最左列，最左列其他数值在递推公式中就完成了赋值
//   dp[0][0] = 1;

//   let numZero = 0;
//   for (let i = 0; i < length; i++) {
//     if (nums[i] === 0) {
//       numZero++;
//     }
//     dp[i][0] = Math.pow(2, numZero);
//   }

//   // 以下嵌套遍历顺序行列可以颠倒
//   // 行遍历，遍历物体
//   for (let i = 1; i < length; i++) {
//     // 列遍历，遍历背包
//     for (let j = 0; j <= bagSize; j++) {
//       if (nums[i] > j) {
//         dp[i][j] = dp[i - 1][j];
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]];
//       }
//     }
//   }
//   return dp[length - 1][bagSize];
// };

/**
 * 3. 动态规划（一维dp数组）
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  if (!nums || (target !== 0 && !target) || nums.length === 0) {
    return 0;
  }

  const sum = nums.reduce((prev, curr) => prev + curr, 0);

  // left = (sum + target)/2
  // 说明此时没有方案，直接返回 0
  if (Math.abs(target) > sum || (sum + target) % 2 === 1) {
    return 0;
  }

  const bagSize = (sum + target) / 2;

  const length = nums.length;

  const dp = new Array(bagSize + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[bagSize];
};
