/**
 * 1. 暴力解法
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return 0
//   }

//   if (!nums.includes(val)) {
//     return nums.length
//   }

//   let k = nums.length

//   for (let i = 0; i < k; i++) {
//     if (nums[i] === val) {
//       for (let j = i + 1; j < k; j++) {
//         nums[j - 1] = nums[j]
//       }
//       i-- // 因为下标 i 以后的数值都向前移动了一位，所以 i 也向前移动一位
//       k-- // 此时数组的大小减一（比如这个场景 nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2），此时的 i 就要保证移动到前一个位置，防止有连续多个 val 的情况出现
//     }
//   }
//   return k
// }

/**
 * 2. 双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return 0
  }

  if (!nums.includes(val)) {
    return nums.length
  }

  let fast = 0,
    slow = 0,
    k = nums.length

  while (fast < k) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }

  return slow
}
