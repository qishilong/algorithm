/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return 0
  }

  let n = 0
  const length = nums.length
  for (let i = 0; i < length; i++) {
    // 从左往右依次比较，保留与上一个不一样的
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[n] = nums[i]
      n++
    }
  }

  return n
}
