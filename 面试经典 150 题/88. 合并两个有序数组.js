/**
 * 1. 双指针
 * 逆序双指针插入
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1,
//     j = n - 1
//   for (let k = m + n - 1; k >= 0; k--) {
//     if (i < 0 || (j >= 0 && nums1[i] <= nums2[j])) {
//       nums1[k] = nums2[j]
//       j--
//     } else {
//       nums1[k] = nums1[i]
//       i--
//     }
//   }
// }

/**
 * 2. 双指针
 * 正序双指针遍历
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const result = new Array(m + n).fill(0)
  let i = 0,
    j = 0,
    current = Infinity

  while (i < m || j < n) {
    if (i === m) {
      current = nums2[j++]
    } else if (j === n) {
      current = nums1[i++]
    } else if (nums1[i] < nums2[j]) {
      current = nums1[i++]
    } else {
      current = nums2[j++]
    }

    result[i + j - 1] = current
  }

  for (let k = 0; k < m + n; k++) {
    nums1[k] = result[k]
  }
}
