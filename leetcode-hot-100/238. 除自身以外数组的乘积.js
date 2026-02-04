/**
 * 1. 暴力
 * 力扣超出时间限制
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return nums;
//   }

//   if (nums.length === 1) {
//     return [0];
//   }

//   if (nums.length === 2) {
//     return nums.reverse();
//   }

//   const length = nums.length,
//     arr = new Array(length).fill(undefined);
//   let sum = 1;

//   for (let i = 0; i < length; i++) {
//     sum = 1;
//     for (let j = 0; j < length; j++) {
//       if (i !== j) {
//         sum *= nums[j];
//       }
//     }
//     if (sum === -0) {
//       sum = 0;
//     }
//     arr[i] = sum;
//   }

//   return arr;
// };

/**
 * 2. 使用前缀积+后缀积
 * 初始化两个空数组 L 和 R。对于给定索引 i，L[i] 代表的是 i 左侧所有数字的乘积，R[i] 代表的是 i 右侧所有数字的乘积。
 * 我们需要用两个循环来填充 L 和 R 数组的值。对于数组 L，L[0] 应该是 1，因为第一个元素的左边没有元素。对于其他元素：L[i] = L[i-1] * nums[i-1]。
 * 同理，对于数组 R，R[length-1] 应为 1。length 指的是输入数组的大小。其他元素：R[i] = R[i+1] * nums[i+1]。
 * 当 R 和 L 数组填充完成，我们只需要在输入数组上迭代，且索引 i 处的值为：L[i] * R[i]。
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0) {
//     return nums;
//   }

//   if (nums.length === 1) {
//     return [0];
//   }

//   if (nums.length === 2) {
//     return nums.reverse();
//   }

//   const length = nums.length,
//     arr = new Array(length).fill(undefined),
//     leftArr = new Array(length).fill(1),
//     rightArr = new Array(length).fill(1);

//   // 求前缀积
//   for (let i = 1; i < length; i++) {
//     leftArr[i] = leftArr[i - 1] * nums[i - 1];
//   }

//   // 求后缀积
//   for (let i = length - 2; i >= 0; i--) {
//     rightArr[i] = rightArr[i + 1] * nums[i + 1];
//   }

//   for (let i = 0; i < length; i++) {
//     let res = leftArr[i] * rightArr[i];
//     if (res === -0) {
//       res = 0;
//     }
//     arr[i] = res;
//   }

//   return arr;
// };

/**
 * 3. 使用前缀积+动态更新后缀积
 * 和上一个代码实现相比，节省空间
 * 方法和上一方法大体相同，唯一变化就是我们没有构造 R 数组。而是用一个遍历来跟踪右边元素的乘积。并更新数组 answer[i]=answer[i]*R。然后 R 更新为 R=R*nums[i]，其中变量 R 表示的就是索引右侧数字的乘积。
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length === 0) {
    return nums;
  }

  if (nums.length === 1) {
    return [0];
  }

  if (nums.length === 2) {
    return nums.reverse();
  }

  const length = nums.length,
    arr = new Array(length).fill(1);

  // 求前缀积
  for (let i = 1; i < length; i++) {
    arr[i] = arr[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = length - 1; i >= 0; i--) {
    arr[i] = arr[i] * right;

    // 动态更新后缀积
    right = right * nums[i];
  }

  return arr;
};
