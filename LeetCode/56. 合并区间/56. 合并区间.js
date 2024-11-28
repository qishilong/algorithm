/**
 * 1. 贪心
 * 按照左边界排序
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   if (!intervals || intervals.length === 0) {
//     return intervals
//   }

//   // 集合区间长度为1时直接返回原集合
//   if (intervals.length === 1) {
//     return intervals
//   }

//   // 按照左边界排序
//   intervals.sort((a, b) => {
//     return a[0] - b[0]
//   })

//   // 第一个区间就可以放进结果集里，后面如果重叠，在 result 上直接合并
//   const result = [intervals[0]]

//   for (let i = 1, length = intervals.length; i < length; i++) {
//     // 最新的判断后续区间是否和当前区间重叠的区间，此时的区间也是后续区间的最小值，因为是按照左边界排序的
//     const resultLast = result[result.length - 1]
//     // 发现重叠区间
//     if (resultLast[1] >= intervals[i][0]) {
//       // 合并区间，只更新右边界就好，因为 resultLast[1] 的左边界一定是最小值，因为是按照左边界排序的
//       resultLast[1] = Math.max(resultLast[1], intervals[i][1])
//     } else {
//       // 区间不重叠
//       result.push(intervals[i])
//     }
//   }

//   return result
// }

/**
 * 2. 左右区间
 * 按照左边界排序
 * 其实原理和上一种方法差不多
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length === 0) {
    return intervals
  }

  // 集合区间长度为1时直接返回原集合
  if (intervals.length === 1) {
    return intervals
  }

  // 按照左边界排序
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  const result = []

  let left = intervals[0][0],
    right = intervals[0][1]

  for (let i = 1, length = intervals.length; i < length; i++) {
    if (intervals[i][0] > right) {
      result.push([left, right])
      left = intervals[i][0]
      right = intervals[i][1]
    } else {
      right = Math.max(intervals[i][1], right)
    }
  }

  result.push([left, right])

  return result
}
