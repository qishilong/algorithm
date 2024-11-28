/**
 * 1. 贪心
 * 按照左边界排序
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

  // 第一个区间就可以放进结果集里，后面如果重叠，在 result 上直接合并
  const result = [intervals[0]]

  for (let i = 1, length = intervals.length; i < length; i++) {
    const resultLast = result[result.length - 1]
    // 发现重叠区间
    if (resultLast[1] >= intervals[i][0]) {
      // 合并区间，只更新右边界就好，因为 resultLast[1] 的左边界一定是最小值，因为是按照左边界排序的
      resultLast[1] = Math.max(resultLast[1], intervals[i][1])
    } else {
      // 区间不重叠
      result.push(intervals[i])
    }
  }

  return result
}
