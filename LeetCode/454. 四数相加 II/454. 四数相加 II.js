/**
 * 哈希表 Map
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  let count = 0;
  // 统计nums1和nums2数组元素之和，和出现的次数，放到map中
  for (let i = 0, lenI = nums1.length; i < lenI; i++) {
    for (let j = 0, lenJ = nums2.length; j < lenJ; j++) {
      const sum = nums1[i] + nums2[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }
  // 找到如果 0-(c+d) 在map中出现过的话，就把map中key对应的value也就是出现次数统计出来
  for (let m = 0, lenM = nums3.length; m < lenM; m++) {
    for (let n = 0, lenN = nums4.length; n < lenN; n++) {
      const sum = nums3[m] + nums4[n];
      count += map.get(0 - sum) || 0;
    }
  }
  return count;
};

const nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];

const result = fourSumCount(nums1, nums2, nums3, nums4);
console.log(result);
