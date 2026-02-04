/**
 * 1. 贪心
 * 按照区间右边界排序
 * 区间总数减去非交叉区间的个数就是需要移除的交叉区间个数
 * @param {number[][]} intervals
 * @return {number}
 */
// var eraseOverlapIntervals = function (intervals) {
//   if (!intervals || intervals.length <= 1) {
//     return 0
//   }

//   // 按照区间右边界排序
//   intervals.sort((a, b) => {
//     return a[1] - b[1]
//   })

//   let end = intervals[0][1], // 记录区间分割点
//     count = 1, // 记录非交叉区间的个数
//     length = intervals.length
//   for (let i = 1; i < length; i++) {
//     if (end <= intervals[i][0]) {
//       end = intervals[i][1]
//       count++
//     }
//   }

//   // 需要移除的交叉区间个数
//   return length - count
// }

/**
 * 2. 贪心
 * 按照区间左边界排序
 * 直接求重叠区间的个数
 * @param {number[][]} intervals
 * @return {number}
 */
// var eraseOverlapIntervals = function (intervals) {
//   if (!intervals || intervals.length <= 1) {
//     return 0
//   }

//   // 按照区间左边界排序
//   intervals.sort((a, b) => {
//     return a[0] - b[0]
//   })

//   let end = intervals[0][1], // 记录区间分割点
//     count = 0, // 从0开始，因为是记录重叠区间
//     length = intervals.length
//   for (let i = 1; i < length; i++) {
//     if (intervals[i][0] >= end) {
//       // 无重叠情况
//       end = intervals[i][1]
//     } else {
//       // 重叠情况
//       end = Math.min(end, intervals[i][1])
//       count++
//     }
//   }

//   // 需要移除的交叉区间个数
//   return count
// }

/**
 * 3. 贪心
 * 根据452.用最少数量的箭引爆气球代码修改解决
 * 弓箭的数量就相当于是非交叉区间的数量，只要把弓箭那道题目代码里射爆气球的判断条件加个等号（认为[0，1][1，2]不是相邻区间），然后用总区间数减去弓箭数量 就是要移除的区间数量了。
 * 无论按照区间右边界排序，还是按照区间左边界排序原理都是一样的
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (!intervals || intervals.length <= 1) {
    return 0
  }

  // 按照区间左边界排序
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  let count = 1, // points 不为空至少需要一支箭
    length = intervals.length
  for (let i = 1; i < length; i++) {
    //  气球 i 和气球 i - 1 不挨着
    if (intervals[i][0] >= intervals[i - 1][1]) {
      count++ // 需要一支箭
    } else {
      // 气球 i 和 气球 i - 1 挨着
      intervals[i][1] = Math.min(intervals[i - 1][1], intervals[i][1]) // 更新重叠气球最小边界
    }
  }

  // 需要移除的交叉区间个数
  return length - count
}
