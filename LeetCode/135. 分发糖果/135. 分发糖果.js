/**
 * 1. 贪心
 * 两次贪心
 * 一次是从左到右遍历，只比较右边孩子评分比左边大的情况。
 * 一次是从右到左遍历，只比较左边孩子评分比右边大的情况。
 * 这样从局部最优推出了全局最优，即：相邻的孩子中，评分高的孩子获得更多的糖果。
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (!ratings.length) {
    return ratings
  }
  if (ratings.length === 1) {
    return 1
  }

  const length = ratings.length
  const candies = new Array(length).fill(1)

  // 从前向后
  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  // 从后向前
  for (let i = length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
  }

  // 统计结果
  let result = 0
  for (let i = 0; i < length; i++) {
    result += candies[i]
  }

  return result
}
