/**
 * 1. 按照顺序遍历
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return 0
  }

  if (nums.length < 3) {
    return nums.length
  }

  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
    } else {
      count = 1
    }
    if (count > 2) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length
}

/**
 * 2. 快慢指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return 0
  }

  if (nums.length < 3) {
    return nums.length
  }

  let fast = 2,
    slow = 2
  const length = nums.length

  while (fast < length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }

  return (nums.length = slow)
}
