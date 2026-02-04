/**
 * 1. 双指针扫描
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height || !Array.isArray(height) || height.length <= 1) {
    return 0
  }

  if (height.length === 2) {
    return 1 * Math.min(height[0], height[1])
  }

  const length = height.length
  let left = 0,
    right = length - 1,
    maxAreaValue = 0 // 记录盛最多水的容器

  while (left < right) {
    maxAreaValue = Math.max(maxAreaValue, (right - left) * Math.min(height[left], height[right]))

    if (height[left] < height[right]) {
      left++
    } else if (height[left] > height[right]) {
      right--
    } else {
      left++, right--
    }
  }

  return maxAreaValue
}
