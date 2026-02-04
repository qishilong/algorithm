/**
 * 1. 贪心
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  if (s.length <= 0) {
    return []
  }
  if (s.length === 1) {
    return [1]
  }

  const map = new Map(), // key: s[i] 字符，value: s[i] 字符出现的最后位置
    length = s.length,
    result = []

  let left = 0,
    right = 0

  // 统计每一个字符最后出现的位置
  for (let i = 0; i < length; i++) {
    map.set(s[i], i)
  }

  for (let i = 0; i < length; i++) {
    // 找到字符出现的最远边界
    right = Math.max(right, map.get(s[i]))
    if (i === right) {
      result.push(right - left + 1)
      left = i + 1
    }
  }

  return result
}
