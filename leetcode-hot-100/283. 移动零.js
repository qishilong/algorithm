/**
 * 1. 循环遍历
 * 保留非0值，然后在数组后面填充0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return nums
  }

  if (nums.length === 1) {
    return nums
  }

  const length = nums.length
  let n = 0

  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[n] = nums[i]
      n++
    }
  }

  while (n < length) {
    nums[n] = 0
    n++
  }

  return nums
}
