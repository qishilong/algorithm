/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30204
 *
 * [56] 合并区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 贪心
 * 1. 先排序，让所有的相邻区间尽可能的重叠在一起，按左边界，或者右边界排序都可以。
 * 2. 按照左边界从小到大排序之后，如果 intervals[i][0] <= intervals[i - 1][1] 即intervals[i]的左边界 <= intervals[i - 1]的右边界，则一定有重叠。
 * 3. 模拟合并区间，用合并区间后左边界和右边界，作为一个新的区间，加入到result数组里就可以了。如果没有合并就把原区间加入到result数组。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (
    !intervals ||
    !Array.isArray(intervals) ||
    intervals.some(item => !item || !Array.isArray(item) || item.length !== 2)
  ) {
    return;
  }

  if (intervals.length === 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  const length = intervals.length;

  result.push(intervals[0]);

  for (let i = 1; i < length; i++) {
    const resultLast = result[result.length - 1];

    if (resultLast[1] >= intervals[i][0]) {
      resultLast[1] = Math.max(resultLast[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

// @lc code=end

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,7],[1,4]]\n
// @lcpr case=end

 */
