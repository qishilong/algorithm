/**
 * 1. 暴力解法
 * 两层for循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
//     return []
//   }

//   const length = nums.length

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       console.log(i, j)
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   return []
// }

/**
 * 2. 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
//     return []
//   }

//   const length = nums.length
//   let j = length - 1

//   let arrObj = []

//   for (let i = 0; i < length; i++) {
//     arrObj.push({
//       value: nums[i],
//       index: i
//     })
//   }

//   arrObj = arrObj.sort((a, b) => a.value - b.value)

//   for (let i = 0; i < j; i++) {
//     while (i < j && arrObj[i].value + arrObj[j].value > target) {
//       j--
//     }
//     if (i < j && arrObj[i].value + arrObj[j].value === target) {
//       return [arrObj[i].index, arrObj[j].index]
//     }
//   }

//   return []
// }

/**
 * 3. HashMap解决
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums || !Array.isArray(nums) || nums.length === 0 || (target !== 0 && !target)) {
    return []
  }

  const length = nums.length
  const map = new Map()

  for (let i = 0; i < length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
  return []
}
