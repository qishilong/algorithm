/**
 * 1. 利用新数组
 * 新数组对应的轮转之后的各个值的index((i + k) % length)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || k <= 0) {
//     return nums;
//   }

//   const length = nums.length,
//     rotateFrequency = k % length,
//     arr = new Array(length).fill(undefined);

//   if (rotateFrequency === 0) {
//     return nums;
//   }

//   for (let i = 0; i < length; i++) {
//     arr[(i + k) % length] = nums[i];
//   }

//   for (let i = 0; i < length; i++) {
//     nums[i] = arr[i];
//   }
// };

/**
 * 2. 翻转数组
 * 该方法基于如下的事实：当我们将数组的元素向右移动 k 次后，尾部 k mod n 个元素会移动至数组头部，其余元素向后移动 k mod n 个位置。
 * 该方法为数组的翻转：我们可以先将所有元素翻转，这样尾部的 k mod n 个元素就被移至数组头部，然后我们再翻转 [0,k mod n−1] 区间的元素和 [k mod n,n−1] 区间的元素即能得到最后的答案。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums || !Array.isArray(nums) || nums.length === 0 || k <= 0) {
    return nums;
  }

  const length = nums.length,
    rotateFrequency = k % length;

  if (rotateFrequency === 0) {
    return nums;
  }

  const reverse = (nums, start, end) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  reverse(nums, 0, length - 1);
  reverse(nums, 0, rotateFrequency - 1);
  reverse(nums, rotateFrequency, length - 1);
};
