/**
 * 哈希表 Map
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  const result = [];
  const map = new Map();
  for (let i = 0, len = nums1.length; i < len; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }
  for (let j = 0, len = nums2.length; j < len; j++) {
    // 控制结果中只包含出现的最小次数
    if (map.has(nums2[j]) && map.get(nums2[j]) >= 1) {
      result.push(nums2[j]);
      map.set(nums2[j], map.get(nums2[j]) - 1);
    }
  }
  return result;
};

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
const result = intersect(nums1, nums2);
console.log(result);
