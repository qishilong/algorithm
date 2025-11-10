/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 * @lcpr version=30204
 *
 * [1027] 最长等差数列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. dp数组
 * @param {number[]} nums
 * @return {number}
 */
// var longestArithSeqLength = function (nums) {
//   if (!nums || !Array.isArray(nums)) {
//     return 0;
//   }

//   if (nums.length < 2) {
//     return [];
//   }

//   const length = nums.length;
//   // 初始化dp数组，dp[i][d]表示以nums[i]结尾，公差为d的最长等差序列长度
//   // d的范围是-500到500，加上偏移量500后变成0到1000
//   const dp = Array.from({ length }, () => new Array(1001).fill(1));

//   // 等差数列长度最少为2
//   let maxLength = 2;

//   for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//       // 计算公差并加上偏移量（将负数公差映射到非负范围）
//       const diff = nums[i] - nums[j] + 500;
//       // 更新dp[i][diff]的值
//       dp[i][diff] = dp[j][diff] + 1;
//       // 更新最大长度
//       maxLength = Math.max(maxLength, dp[i][diff]);
//     }
//   }

//   return maxLength;
// };

/**
 * 2. 哈希表
 * @param {number[]} nums
 * @return {number}
 */
// var longestArithSeqLength = function (nums) {
//   if (!nums || !Array.isArray(nums)) {
//     return 0;
//   }

//   if (nums.length < 2) {
//     return [];
//   }

//   const length = nums.length;
//   const map = new Map();

//   // 等差数列长度最少为2
//   let maxLength = 2;

//   for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//       const diff = nums[i] - nums[j];
//       const preLength = map.get(`${j}+${diff}`) || 1;

//       const curLength = preLength + 1;

//       map.set(`${i}+${diff}`, curLength);

//       // 更新最大长度
//       maxLength = Math.max(maxLength, curLength);
//     }
//   }

//   return maxLength;
// };

/**
 * 3. 先求出所有等差数列，再求出最大的
 * （超出leetcode时间最大限制）
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  if (!nums || !Array.isArray(nums)) {
    return 0;
  }

  if (nums.length < 2) {
    return [];
  }

  const length = nums.length;
  const res = [];
  const map = new Map();

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      // 计算公差：arr[i] - arr[j]（j < i，所以arr[j]是前一项，arr[i]是后一项）
      const diff = nums[i] - nums[j];
      const key = `${j}+${diff}`;

      // 如果存在以 j 结尾，公差为 diff 的序列
      if (map.has(key)) {
        const prevSeq = map.get(key);
        // 创建新序列（添加当前元素）
        const newSeq = [...prevSeq, nums[i]];
        res.push(newSeq);
        // 更新状态
        map.set(`${i}+${diff}`, newSeq);
      } else {
        // 长度为2的等差数列（这里规定等差数列最小长度可为2）
        const seq = [nums[j], nums[i]];
        res.push(seq);
        // 记录新序列
        map.set(`${i}+${diff}`, seq);
      }
    }
  }

  return Math.max(...res.map((item) => item.length));
};
// @lc code=end

/*
// @lcpr case=start
// [3,6,9,12]\n
// @lcpr case=end

// @lcpr case=start
// [9,4,7,2,10]\n
// @lcpr case=end

// @lcpr case=start
// [20,1,15,3,10,5,8]\n
// @lcpr case=end

 */
