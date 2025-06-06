const nums = [1, 1, 1, 1, 1, 1, 2, 2, 2, 3]
/**
 * 1. 逐个遍历
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_one = function (nums) {
  if (nums.length < 3) {
    return nums.length
  }
  let count = 1
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      ++count
    } else {
      count = 1
    }
    if (count > 2) {
      nums.splice(i, 1)
      --i
    }
  }
  return nums.length
}

const result_one = removeDuplicates_one(nums)
console.log(result_one)

/**
 * 2. 快慢指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_two = function (nums) {
  if (nums.length < 3) {
    return nums.length // 为了符合题目要求的输出
    // return nums;
  }
  const length = nums.length
  let fast = 2,
    slow = 2
  while (fast < length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return (nums.length = slow) // 为了符合题目要求的输出
}

const result_two = removeDuplicates_two(nums)
console.log(result_two)
