/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 * @lcpr version=30204
 *
 * [1423] 可获得的最大点数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 滑动窗口
 * 思路
 * 记数组 cardPoints 的长度为 n，由于只能从开头和末尾拿 k 张卡牌，所以最后剩下的必然是连续的 n−k 张牌。
 * 我们可以通过求出剩余卡牌点数之和的最小值，来求出拿走卡牌点数之和的最大值。
 *
 * 算法
 * 由于剩余卡牌是连续的，使用一个固定长度为 n−k 的滑动窗口对数组 cardPoints 进行遍历，求出滑动窗口最小值，然后用所有卡牌的点数之和减去该最小值，即得到了拿走卡牌点数之和的最大值。
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  if (
    !cardPoints ||
    !Array.isArray(cardPoints) ||
    cardPoints.length === 0 ||
    !k ||
    typeof k !== "number" ||
    k > cardPoints.length
  ) {
    return;
  }

  const length = cardPoints.length;
  const totalSum = cardPoints.reduce((a, b) => a + b, 0);

  if (k === 1) {
    return Math.max(cardPoints[0], cardPoints[length - 1]);
  }

  if (k === length) {
    return totalSum;
  }

  const windowsSize = length - k;

  let sum = 0;
  for (let i = 0; i < windowsSize; i++) {
    sum += cardPoints[i];
  }

  let minSum = sum;
  for (i = windowsSize; i < length; i++) {
    sum += cardPoints[i] - cardPoints[i - windowsSize];
    minSum = Math.min(sum, minSum);
  }

  return totalSum - minSum;
};

const cardPoints = [1, 2, 3, 4, 5, 6, 1],
  k = 3;

console.log(maxScore(cardPoints, k));
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// [9,7,7,9,7,7,9]\n7\n
// @lcpr case=end

// @lcpr case=start
// [1,1000,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,79,80,1,1,1,200,1]\n3\n
// @lcpr case=end

 */
