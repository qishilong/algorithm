/**
 * 1. 贪心
 * 为了让气球尽可能的重叠，需要对数组进行排序。
 * 无论是按照气球起始位置排序，还是按照气球终止位置排序都可以，只不过对应的遍历顺序不同，如果按照起始位置排序，那么就从前向后遍历气球数组，靠左尽可能让气球重复。如果从前向后遍历遇到重叠的气球了，重叠气球中右边边界的最小值之前的区间一定需要一个弓箭。
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length <= 0) {
    return points
  }
  if (points.length === 1) {
    return 1
  }

  // 按照气球起始位置排序
  points.sort((a, b) => {
    return a[0] - b[0]
  })

  // points 不为空至少需要一支箭
  let result = 1
  for (let i = 1, length = points.length; i < length; i++) {
    //  气球 i 和气球 i - 1 不挨着，注意这里不是 >=
    if (points[i][0] > points[i - 1][1]) {
      result++ // 需要一支箭
    } else {
      // 气球 i 和 气球 i - 1 挨着
      points[i][1] = Math.min(points[i][1], points[i - 1][1]) // 更新重叠气球最小边界
    }
  }

  return result
}
