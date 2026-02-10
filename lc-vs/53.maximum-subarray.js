/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30204
 *
 * [53] 最大子数组和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 爆搜（回溯）
 * leetcode超时
 * 求出所有连续子数组的和，返回最大值
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   if (!nums || !Array.isArray(nums)) {
//     return;
//   }

//   if (nums.length === 0) {
//     return 0;
//   }

//   if (nums.length === 1) {
//     return nums[0];
//   }

//   const length = nums.length;
//   let max = -Infinity;

//   /**
//    * 求一个数组的连续子数组
//    * @param {number} start
//    * @param {number[]} path
//    */
//   const backtracking = (start, sum) => {
//     max = sum > max ? sum : max;

//     if (start >= length) {
//       return;
//     }

//     sum += nums[start];
//     backtracking(start + 1, sum);
//     sum -= nums[start];
//   };

//   for (let i = 0; i < length; i++) {
//     backtracking(i + 1, nums[i]);
//   }

//   return max;
// };

/**
 * 2. 爆搜（两层for循环）
 * leetcode超时
 * 求出所有连续子数组的和，返回最大值
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   if (!nums || !Array.isArray(nums)) {
//     return;
//   }

//   if (nums.length === 0) {
//     return 0;
//   }

//   if (nums.length === 1) {
//     return nums[0];
//   }

//   const length = nums.length;
//   let max = -Infinity;

//   for (let i = 0; i < length; i++) {
//     let sum = 0;
//     for (let j = i; j < length; j++) {
//       sum += nums[j];
//       max = sum > max ? sum : max;
//     }
//   }

//   return max;
// };

/**
 * 3. 贪心
 * 局部最优：当前“连续和”为负数的时候立刻放弃，从下一个元素重新计算“连续和”，因为负数加上下一个元素“连续和”只会越来越小。
 * 全局最优：选取最大“连续和”
 *
 * 误区一：不少同学认为如果输入用例都是-1，或者都是负数，这个贪心算法跑出来的结果是0，这是又一次证明脑洞模拟不靠谱的经典案例，建议大家把代码运行一下试一试，就知道了，也会理解为什么 result 要初始化为最小负数了。
 * 误区二：大家在使用贪心算法求解本题，经常陷入的误区，就是分不清，是遇到负数就选择起始位置，还是连续和为负选择起始位置。在动画演示用，大家可以发现，4遇到-1的时候，我们依然累加了，为什么呢？因为和为3，只要连续和还是正数就会对后面的元素起到增大总和的作用。所以只要连续和为正数我们就保留。这里也会有录友疑惑，那4+-1之后不就变小了吗？会不会错过4成为最大连续和的可能性？其实并不会，因为还有一个变量 result 一直在更新最大的连续和，只要有更大的连续和出现，result 就更新了，那么 result 已经把4更新了，后面连续和变成3，也不会对最后结果有影响。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return;
  }

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const length = nums.length;
  let max = -Infinity,
    sum = 0;

  for (let i = 0; i < length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

// @lc code=end

/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */
