/**
 * 1. 贪心
 * 按照左边界排序
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   if (
//     !intervals ||
//     !Array.isArray(intervals) ||
//     intervals.length === 0 ||
//     intervals.find(item => !item || !Array.isArray(item) || item.length === 0)
//   ) {
//     throw new Error("数据格式错误");
//   }

//   if (intervals.length === 1) {
//     return intervals;
//   }

//   intervals.sort((a, b) => a[0] - b[0]);

//   const length = intervals.length,
//     mergeArr = [intervals[0]]; // 第一个区间就可以放进结果集里，后面如果重叠，在result上直接合并
//   let mergeArrLast = [];

//   for (let i = 1; i < length; i++) {
//     // 判断后续区间是否和当前区间重叠，此时的区间也是后续区间的最小值，因为是按照左边界排序的
//     mergeArrLast = mergeArr[mergeArr.length - 1];
//     // 发现重叠区间
//     if (mergeArrLast[1] >= intervals[i][0]) {
//       // 合并区间，只更新右边界就好，因为 mergeArrLast[1] 的左边界一定是最小值，因为是按照左边界排序的
//       mergeArrLast[1] = Math.max(mergeArrLast[1], intervals[i][1]);
//     } else {
//       // 区间不重叠
//       mergeArr.push(intervals[i]);
//     }
//   }
//   return mergeArr;
// };

/**
 * 2. 左右区间
 * 按照左边界排序，其实原理和上一种差不多
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (
    !intervals ||
    !Array.isArray(intervals) ||
    intervals.length === 0 ||
    intervals.find(item => !item || !Array.isArray(item) || item.length === 0)
  ) {
    throw new Error("数据格式错误");
  }

  if (intervals.length === 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const length = intervals.length,
    mergeArr = [];
  let left = intervals[0][0],
    right = intervals[0][1];

  for (let i = 1; i < length; i++) {
    if (intervals[i][0] > right) {
      mergeArr.push([left, right]);
      left = intervals[i][0];
      right = intervals[i][1];
    } else {
      // 只更新右边界就可以了
      right = Math.max(intervals[i][1], right);
    }
  }
  mergeArr.push([left, right]);
  return mergeArr;
};
