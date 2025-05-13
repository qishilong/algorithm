/**
 * 1. 从两数之和实现三数之和
 * nums[i] + nums[j] + nums[k] == 0
 * ===>
 * nums[i] + nums[j] = -nums[k]
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length < 3) {
//     return []
//   }

//   if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
//     return [nums]
//   }

//   // 先排序，后期好去重
//   nums.sort((a, b) => a - b)

//   /**
//    * 两数之和
//    * @param {number[]} nums
//    * @param {number} target
//    * @param {number} start
//    * @returns {number[][]}
//    */
//   const twoSum = (nums, target, start) => {
//     const result = [],
//       length = nums.length
//     let j = length - 1

//     for (let i = start; i < length; i++) {
//       // 题目要求返回所有和为 0 且不重复的三元组，所以需要对数组去重
//       if (i > start && nums[i] === nums[i - 1]) {
//         continue
//       }
//       while (i < j && nums[i] + nums[j] > target) {
//         j--
//       }
//       if (i < j && nums[i] + nums[j] === target) {
//         result.push([nums[i], nums[j]])
//       }
//     }
//     return result
//   }

//   const length = nums.length,
//     result = []

//   for (let i = 0; i < length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     twoSum(nums, -nums[i], i + 1).forEach(item => {
//       result.push([...item, nums[i]])
//     })
//   }

//   return result
// }

/**
 * 2. 双指针
 * nums[i] + nums[j] + nums[k] == 0
 * ===>
 * nums[i] + nums[j] = -nums[k]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length < 3) {
    return []
  }

  if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) {
    return [nums]
  }

  // 先排序，后期好去重
  nums.sort((a, b) => a - b)

  if (nums[0] > 0) {
    return []
  }

  const length = nums.length,
    result = []

  for (let i = 0; i < length; i++) {
    // 相当于从每个数开始都判断一下是否可以组成一个三元组
    let left = i + 1,
      right = length - 1

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[left], nums[right], nums[i]])

        // 题目要求返回所有和为 0 且不重复的三元组，所以需要对数组去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }

        // 题目要求返回所有和为 0 且不重复的三元组，所以需要对数组去重
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }

  return result
}
