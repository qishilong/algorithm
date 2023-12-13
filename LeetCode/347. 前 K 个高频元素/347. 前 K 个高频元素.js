const { Heap } = require("./../../notes/tools/二叉堆的构建类.js");

/**
 * 1. Map
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   if (nums.length === k) {
//     return nums;
//   }
//   const map = new Map();
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   const arr = [];
//   map.forEach((val, key) => arr.push([val, key]));
//   arr.sort((a, b) => b[0] - a[0]);
//   const result = [];
//   for (let i = 0; i < k; i++) {
//     result.push(arr[i][1]);
//   }
//   return result;
// };

/**
 * 2. 利用堆
 * @param {*} nums
 * @param {*} k
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1]);

  // entry 是一个长度为 2 的数组，0 位置存储 key，1 位置存储 value
  const entries = map.entries();

  for (const entry of entries) {
    heap.push(entry);

    if (heap.size() > k) {
      heap.pop();
    }
  }

  const result = [];

  for (let i = heap.size() - 1; i >= 0; i--) {
    result[i] = heap.pop()[0];
  }

  return result;
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
const result = topKFrequent(nums, k);
console.log(result);
