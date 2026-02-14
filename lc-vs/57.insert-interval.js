/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * @lcpr version=30204
 *
 * [57] 插入区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 1. 贪心
 * 先插入再合并
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// var insert = function (intervals, newInterval) {
//   if (
//     !intervals ||
//     !Array.isArray(intervals) ||
//     intervals.some(item => !item || !Array.isArray(item))
//   ) {
//     return;
//   }

//   if (!newInterval || !Array.isArray(newInterval) || newInterval.length === 0 ) {
//     return intervals;
//   }

//   let left = 0,
//     right = intervals.length - 1,
//     targetIndex = -1;

//   // 二分查找，查询第一个大于目标值的下标
//   while (left <= right) {
//     const mid = Math.floor((right - left) / 2) + left;
//     if (newInterval[0] === intervals[mid][0]) {
//       if (intervals[mid][1] >= newInterval[1]) {
//         return intervals;
//       } else {
//         intervals = [...intervals.slice(0, mid), newInterval, ...intervals.slice(mid)];
//         targetIndex = -2;
//       }
//       break;
//     }

//     if (intervals[mid][0] > newInterval[0]) {
//       targetIndex = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   if (targetIndex === -1) {
//     intervals.push(newInterval);
//   } else {
//     if (targetIndex !== -2) {
//       intervals = [
//         ...intervals.slice(0, targetIndex),
//         newInterval,
//         ...intervals.slice(targetIndex)
//       ];
//     }
//   }

//   const result = [intervals[0]];

//   const length = intervals.length;

//   for (let i = 1; i < length; i++) {
//     const resultLast = result[result.length - 1];

//     if (resultLast[1] >= intervals[i][0]) {
//       resultLast[1] = Math.max(resultLast[1], intervals[i][1]);
//     } else {
//       result.push(intervals[i]);
//     }
//   }

//   return result;
// };

/**
 * 2. 模拟
 * 题目中说明所给区间是不重复的，没有重叠的。
 * 当遍历到区间 [left_i,right_i]，当前区间为 S 时，有三种情况：
 * - 如果 right_i < left, 说明 [left_i,right_i] 与 S 不重叠并且在其左侧，我们可以直接将 [left_i,right_i] 加入结果；
 * - 如果 left_i < right, 说明 [left_i,right_i] 与 S 不重叠并且在其右侧，我们可以直接将 [left_i,right_i] 加入结果；
 * - 如果上面两种情况均不满足，说明 [left_i,right_i] 与 S 重叠，我们无需将 [left_i,right_i] 加入结果。此时，我们需要将 S 与 [left_i,right_i] 合并，即将 S 更新为其与 [left_i,right_i] 的并集。
 * 最后如果已经遍历完了区间数组，而且结果中还未加入合并区间，则根据判断，将合并区间加入到结果中，
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (
    !intervals ||
    !Array.isArray(intervals) ||
    intervals.some(item => !item || !Array.isArray(item))
  ) {
    return;
  }

  if (!newInterval || !Array.isArray(newInterval) || newInterval.length === 0) {
    return intervals;
  }

  const length = intervals.length;

  let left = newInterval[0],
    right = newInterval[1],
    tag = false;

  const result = [];

  for (let i = 0; i < length; i++) {
    const currentIntervals = intervals[i];
    if (currentIntervals[0] > right) {
      // 在插入区间的右侧且无交集，情况一
      if (!tag) {
        tag = true;
        result.push([left, right]);
      }
      result.push(currentIntervals);
    } else if (currentIntervals[1] < left) {
      // 在插入区间的左侧且无交集，情况二
      result.push(currentIntervals);
    } else {
      // 与插入区间有交集，计算合并后的值，情况三
      left = Math.min(currentIntervals[0], left);
      right = Math.max(currentIntervals[1], right);
    }
  }

  // 如果已经遍历完区间数组而且，未在结果中加入合并区间，则将合并区间加入数组
  if (!tag) {
    result.push([left, right]);
  }

  return result;
};

// @lc code=end

/*
// @lcpr case=start
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

 */
