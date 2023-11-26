/**
 * 哈希表
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  const result = [];
  for (const item of nums1) {
    set.add(item);
  }
  for (const item of nums2) {
    if (set.has(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

const result = intersection(nums1, nums2);
console.log(result);
