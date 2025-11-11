/*
 * @lc app=leetcode.cn id=1093 lang=javascript
 * @lcpr version=30204
 *
 * [1093] 大样本统计
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  if (!count || !Array.isArray(count) || count.length === 0) {
    return [];
  }

  const length = count.length;
  let sum = 0,
    allCount = 0,
    min = -Infinity,
    max = -Infinity,
    mean = 0,
    median = -Infinity,
    mode = {
      val: 0,
      count: 0,
    };
  const map = new Map();
  for (let i = 0; i < length; i++) {
    const val = count[i];
    if (val === 0) {
      continue;
    }
    if (val && min === -Infinity) {
      min = i;
    }
    if (val && i > max) {
      max = i;
    }
    allCount += val;
    sum += val * i;
    map.set(i, val);
  }
  mean = sum / allCount;

  if (allCount % 2 === 1) {
    let midIndex = Math.floor(allCount / 2) + 1;
    map.forEach((val, key) => {
      if (midIndex >= 0) {
        midIndex -= val;
      }

      if (midIndex <= 0 && median === -Infinity) {
        median = key;
      }

      if (val > mode.count) {
        mode.val = key;
        mode.count = val;
      }
    });
  } else {
    const midIndex = Math.floor(allCount / 2);
    let left = midIndex,
      right = midIndex + 1,
      leftVal = -Infinity,
      rightVal = -Infinity;

    map.forEach((val, key) => {
      if (left >= 0) {
        left -= val;
      }

      if (left <= 0 && leftVal === -Infinity) {
        leftVal = key;
      }

      if (right >= 0) {
        right -= val;
      }

      if (right <= 0 && rightVal === -Infinity) {
        rightVal = key;
      }

      if (val > mode.count) {
        mode.val = key;
        mode.count = val;
      }
    });

    median = (leftVal + rightVal) / 2;
  }

  return [min, max, mean, median, mode.val];
};
// @lc code=end

/*
// @lcpr case=start
// [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n
// @lcpr case=end

 */
