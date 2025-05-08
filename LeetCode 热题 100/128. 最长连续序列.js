/**
 * 1. 哈希表 Set
 * 时间复杂度：O(n)
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return 0
//   }

//   if (nums.length === 1) {
//     return 1
//   }

//   const set = new Set(nums)
//   let longest = 1
//   for (const num of set) {
//     if (!set.has(num - 1)) {
//       let curNum = num
//       let curLongest = 1

//       while (set.has(curNum + 1)) {
//         curNum++
//         curLongest++

//         longest = Math.max(longest, curLongest)
//       }
//     }
//   }

//   return longest
// }

/**
 * 2. 先排序后遍历
 * 时间复杂度：O(nlogn)
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return 0
  }

  if (nums.length === 1) {
    return 1
  }

  nums.sort((a, b) => a - b)
  const length = nums.length
  let longest = 1,
    curLongest = 1

  for (let i = 1; i < length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        curLongest++
      } else {
        curLongest = 1
      }
      longest = Math.max(longest, curLongest)
    }
  }

  return longest
}
