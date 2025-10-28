/*
 * @lc app=leetcode.cn id=624 lang=javascript
 * @lcpr version=30204
 *
 * [624] 数组列表中的最大距离
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  if (!arrays || !Array.isArray(arrays) || arrays.length < 2) {
    return 0;
  }

  const length = arrays.length,
    minArr = [],
    maxArr = [];

  let maxValRight = {},
    minValRight = {},
    minValLeft = {},
    maxValLeft = {};

  for (let i = 0; i < length; i++) {
    const arr = arrays[i];
    minArr.push({
      val: Math.min(...arr),
      index: i,
    });

    maxArr.push({
      val: Math.max(...arr),
      index: i,
    });
  }

  maxArr.sort((a, b) => a.val - b.val);
  minArr.sort((a, b) => a.val - b.val);

  maxValRight = maxArr[maxArr.length - 1];
  minValLeft = minArr[0];

  for (let i = 0; i < length; i++) {
    const min = minArr[i];
    if (min.index !== maxValRight.index) {
      minValRight = min;
      break;
    }
  }

  let i = length - 1;
  while (i >= 0) {
    if (maxArr[i].index !== minValLeft.index) {
      maxValLeft = maxArr[i];
      break;
    }
    i--;
  }

  return Math.max(
    Math.abs(maxValRight.val - minValRight.val),
    Math.abs(minValLeft.val - maxValLeft.val),
  );
};
const arrays = [
  [1, 5],
  [3, 4],
];

const res = maxDistance(arrays);
console.log(res);
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5],[1,2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1],[1]]\n
// @lcpr case=end

 */
