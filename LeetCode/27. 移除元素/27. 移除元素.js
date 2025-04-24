/**
 * 1. 暴力
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     if (nums[i] === val) {
//       for (let j = i + 1; j < length; j++) {
//         nums[j - 1] = nums[j];
//       }
//       i--; // 因为下标 i 以后的数值都向前移动了一位，所以 i 也向前移动一位
//       length--; // 此时数组的大小减一（比如这个场景 nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2），此时的 i 就要保证移动到前一个位置，防止有连续多个 val 的情况出现;
//     }
//   }
//   return length;
// };

/**
 * 2. 双指针（快慢指针）
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let fast = 0,
    slow = 0,
    len = nums.length

  while (fast < len) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}

const nums = [3, 2, 2, 3],
  val = 3

const result = removeElement(nums, val)
console.log(result)
