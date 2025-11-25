/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30204
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (
    !nums1 ||
    !nums2 ||
    !Array.isArray(nums1) ||
    !Array.isArray(nums2) ||
    (nums1.length === 0 && nums2.length === 0)
  ) {
    return;
  }

  const getMid = (arr) => {
    if (arr.length === 0) {
      return;
    }
    if (arr.length === 1) {
      return arr[0];
    }

    const length = arr.length;
    const midIndex = Math.floor(length / 2);
    if (length % 2 === 1) {
      return arr[midIndex];
    } else {
      return (arr[midIndex] + arr[midIndex - 1]) / 2;
    }
  };

  let length1 = nums1.length,
    length2 = nums2.length;

  const arr = new Array(length1 + length2).fill(0);

  while (length1 >= 0 || length2 >= 0) {
    if (length1 === 0 && length2 > 0) {
      const arrLast = length2 - 1;
      arr[arrLast] = nums2[arrLast];
      length2--;
    } else if (length1 > 0 && length2 === 0) {
      const arrLast = length1 - 1;
      arr[arrLast] = nums1[arrLast];
      length1--;
    } else if (length1 > 0 && length2 > 0) {
      const last1 = length1 - 1,
        last2 = length2 - 1,
        arrLast = last1 + last2 + 1;
      if (nums1[last1] > nums2[last2]) {
        arr[arrLast] = nums1[last1];
        length1--;
      } else if (nums1[last1] === nums2[last2]) {
        length1--;
        length2--;
        arr[arrLast] = nums1[last1];
        arr[arrLast - 1] = nums2[last2];
      } else {
        arr[arrLast] = nums2[last2];
        length2--;
      }
    } else {
      break;
    }
  }

  const res = getMid(arr);

  return res;
};

const nums1 = [1, 3],
  nums2 = [2];
findMedianSortedArrays(nums1, nums2);
// @lc code=end
/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */
