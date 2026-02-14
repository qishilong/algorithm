/**
 * 二分查找，查找目标值的下标
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 目标值在数组中的索引，如果不存在返回 -1
 */
const binarySearch = (arr, target) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || typeof target !== 'number') {
    return -1;
  }

  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      result = mid;
      break;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arr, 5)); // 4
// console.log(binarySearch(arr, 10)); // -1

/**
 * 二分查找，查找第一个大于目标值的下标（写法一）
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 第一个大于 target 的元素的索引，如果不存在返回 -1
 */
const binarySearchFirstGreater1 = (arr, target) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || typeof target !== 'number') {
    return -1;
  }

  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearchFirstGreater1(arr, 5)); // 5
// console.log(binarySearchFirstGreater1(arr, 9)); // -1

/**
 * 二分查找，查找第一个大于目标值的下标（写法二）
 * 循环结束后 low 就是第一个大于 target 的位置
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 第一个大于 target 的元素的索引，如果不存在返回 -1
 */
const binarySearchFirstGreater2 = (arr, target) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || typeof target !== 'number') {
    return -1;
  }

  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;

    if (arr[mid] <= target) {
      left = mid + 1; // 继续向右找
    } else {
      right = mid - 1; // 向左找，可能有更靠前的
    }
  }

  // 循环结束后，left 指向第一个 > target 的位置
  return left < arr.length ? left : -1;
};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearchFirstGreater2(arr, 5)); // 5
// console.log(binarySearchFirstGreater2(arr, 9)); // -1

/**
 * 二分查找，查找第一个小于目标值的下标
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 第一个小于 target 的元素的索引，如果不存在返回 -1
 */
const binarySearchFirstSmaller = (arr, target) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || typeof target !== 'number') {
    return -1;
  }

  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < target) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearchFirstSmaller(arr, 5)); // 3
// console.log(binarySearchFirstSmaller(arr, 1)); // -1

/**
 * 二分查找，查找最后一个等于目标值的下标
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 最后一个等于 target 的元素的索引，如果不存在等于 target 的元素返回 -1
 */
const binarySearchLastEqual = (arr, target) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0 || typeof target !== 'number') {
    return -1;
  }

  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; // 继续向右找，可能有更靠后的
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
