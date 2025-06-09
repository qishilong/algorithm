/**
 * 1. 枚举
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (k !== 0 && !k)) {
//     return 0;
//   }

//   if (nums.length === 1 && k !== nums[0]) {
//     return 0;
//   }

//   if (nums.length === 1 && k === nums[0]) {
//     return 1;
//   }

//   const length = nums.length;
//   let count = 0;
//   let stepSum = 0;

//   for (let i = 0; i < length; ++i) {
//     stepSum = 0;
//     for (let j = i; j >= 0; --j) {
//       stepSum += nums[j];
//       if (stepSum === k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

/**
 * 2. 前缀合+哈希表
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (!nums || !Array.isArray(nums) || nums.length === 0 || (k !== 0 && !k)) {
    return 0;
  }

  if (nums.length === 1 && k !== nums[0]) {
    return 0;
  }

  if (nums.length === 1 && k === nums[0]) {
    return 1;
  }

  const length = nums.length;
  const map = new Map();
  let count = 0,
    prefix = 0;

  map.set(0, 1);

  for (let i = 0; i < length; ++i) {
    prefix += nums[i];

    if (map.has(prefix - k)) {
      count += map.get(prefix - k);
    }

    if (map.has(prefix)) {
      map.set(prefix, map.get(prefix) + 1);
    } else {
      map.set(prefix, 1);
    }
  }

  return count;
};
