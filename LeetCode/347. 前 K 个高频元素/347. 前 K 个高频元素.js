/**
 * 1. Map
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length === k) {
    return nums;
  }
  const map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const arr = [];
  map.forEach((val, key) => arr.push([val, key]));
  arr.sort((a, b) => b[0] - a[0]);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i][1]);
  }
  return result;
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
const result = topKFrequent(nums, k);
console.log(result);
