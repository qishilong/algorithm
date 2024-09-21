/**
 * 贪心
 * 版本一
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var largestSumAfterKNegations = function (nums, k) {
//   if (!nums) {
//     return nums;
//   }
//   if (nums.length === 0) {
//     return 0;
//   }

//   const sum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//       result += arr[i];
//     }
//     return result;
//   };

//   if (k <= 0) {
//     return sum(nums);
//   }

//   const swap = (arr, left, right) => {
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//   };

//   /**
//    * 快速排序
//    * @param {number[]} arr 传入的数组
//    * @param {number} start 开始下标
//    * @param {number} end 结束下标
//    * @param {boolean} isFirstOrder 是否是正序排序
//    * @returns {number[]}
//    */
//   const sort = (arr, start, end, isFirstOrder) => {
//     if (start >= end - 1) {
//       return arr;
//     }

//     let right = end,
//       left = start;

//     do {
//       do {
//         left++;
//       } while (
//         left < right &&
//         (isFirstOrder
//           ? Math.abs(arr[left]) < Math.abs(arr[start])
//           : Math.abs(arr[left]) > Math.abs(arr[start]))
//       );
//       do {
//         right--;
//       } while (
//         left < right &&
//         (isFirstOrder
//           ? Math.abs(arr[right]) > Math.abs(arr[start])
//           : Math.abs(arr[right]) < Math.abs(arr[start]))
//       );

//       if (left < right) {
//         swap(arr, left, right);
//       }
//     } while (left < right);
//     const pointIndex = left === right ? right - 1 : right;
//     swap(arr, start, pointIndex);
//     sort(arr, start, pointIndex, isFirstOrder);
//     sort(arr, pointIndex + 1, end, isFirstOrder);
//   };

//   // 第一步
//   sort(nums, 0, nums.length, false);

//   // 第二步
//   for (let i = 0, length = nums.length; i < length; i++) {
//     if (nums[i] < 0 && k > 0) {
//       nums[i] *= -1;
//       k--;
//     }
//   }

//   // 第三步
//   // 若k还大于0,则寻找最小的数进行不断取反
//   if (k % 2 === 1) {
//     nums[nums.length - 1] *= -1;
//   }

//   // 第四步
//   return sum(nums);
// };

/**
 * 贪心
 * 版本二（优化：一次求和）
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  if (!nums) {
    return nums;
  }
  if (nums.length === 0) {
    return 0;
  }

  const sum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  };

  if (k <= 0) {
    return sum(nums);
  }

  const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  };

  /**
   * 快速排序
   * @param {number[]} arr 传入的数组
   * @param {number} start 开始下标
   * @param {number} end 结束下标
   * @param {boolean} isFirstOrder 是否是正序排序
   * @returns {number[]}
   */
  const sort = (arr, start, end, isFirstOrder) => {
    if (start >= end - 1) {
      return arr;
    }

    let right = end,
      left = start;

    do {
      do {
        left++;
      } while (
        left < right &&
        (isFirstOrder
          ? Math.abs(arr[left]) < Math.abs(arr[start])
          : Math.abs(arr[left]) > Math.abs(arr[start]))
      );
      do {
        right--;
      } while (
        left < right &&
        (isFirstOrder
          ? Math.abs(arr[right]) > Math.abs(arr[start])
          : Math.abs(arr[right]) < Math.abs(arr[start]))
      );

      if (left < right) {
        swap(arr, left, right);
      }
    } while (left < right);
    const pointIndex = left === right ? right - 1 : right;
    swap(arr, start, pointIndex);
    sort(arr, start, pointIndex, isFirstOrder);
    sort(arr, pointIndex + 1, end, isFirstOrder);
  };

  // 第一步：将数组按照绝对值大小从大到小排序，注意要按照绝对值的大小
  sort(nums, 0, nums.length, false);

  let result = 0;
  // 第二步：从前向后遍历，遇到负数将其变为正数，同时K--，求和
  for (let i = 0, length = nums.length; i < length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
    // 求和
    result += nums[i];
  }

  // 第三步：若k还大于0,则减去两倍的最小值（因为之前加过一次）
  if (k % 2 === 1) {
    result -= nums[nums.length - 1] * 2;
  }

  // 第四步：返回结果
  return result;
};
