/**
 * 1. 排序
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return undefined
//   }
//   if (nums.length === 1) {
//     return nums[0]
//   }

//   nums.sort((a, b) => a - b)

//   return nums[Math.floor(nums.length / 2)]
// }

/**
 * 2. 哈希表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return undefined
//   }
//   if (nums.length === 1) {
//     return nums[0]
//   }

//   const map = new Map(),
//     length = nums.length
//   let maxCountValue = undefined,
//     maxCount = 0

//   for (let i = 0; i < length; i++) {
//     const value = nums[i]
//     if (map.has(value)) {
//       map.set(value, map.get(value) + 1)
//     } else {
//       map.set(value, 1)
//     }
//   }

//   map.forEach((value, key) => {
//     if (value > maxCount) {
//       maxCount = value
//       maxCountValue = key
//     }
//   })

//   return maxCountValue
// }

/**
 * 3. Boyer-Moore 投票算法
 * 时间复杂度：O(n) Boyer-Moore 算法只对数组进行了一次遍历
 * 空间复杂度：O(1) Boyer-Moore 算法只需要常数级别的额外空间
 *
 * 思路:
 * 如果我们把众数记为 +1，把其他数记为 −1，将它们全部加起来，显然和大于 0，从结果本身我们可以看出众数比其他数多。
 *
 * 算法:
 * Boyer-Moore 算法的本质和方法四中的分治十分类似。我们首先给出 Boyer-Moore 算法的详细步骤：
 *   我们维护一个候选众数 candidate 和它出现的次数 count。初始时 candidate 可以为任意值，count 为 0；
 *   我们遍历数组 nums 中的所有元素，对于每个元素 x，在判断 x 之前，如果 count 的值为 0，我们先将 x 的值赋予 candidate，随后我们判断 x：
 *     如果 x 与 candidate 相等，那么计数器 count 的值增加 1；
 *     如果 x 与 candidate 不等，那么计数器 count 的值减少 1。
 *   在遍历完成后，candidate 即为整个数组的众数。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return undefined
  }
  if (nums.length === 1) {
    return nums[0]
  }

  const length = nums.length
  let count = 0,
    candidate = undefined

  for (let i = 0; i < length; i++) {
    if (count === 0) {
      candidate = nums[i]
    }

    candidate === nums[i] ? count++ : count--
  }

  return candidate
}
