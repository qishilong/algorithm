// const arr = [1, 4, 1, 3, 1512, 451234, 15, 1, 412, 312, 51, 251, 341];

const swapArr = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const quicksort = (arr, start, end, isFirstOrder) => {
  if (start >= end - 1) {
    return arr;
  }
  let left = start,
    right = end;
  do {
    do {
      left++;
    } while (left < right && (isFirstOrder ? arr[left] < arr[start] : arr[left] > arr[start]));
    do {
      right--;
    } while (left < right && (isFirstOrder ? arr[right] > arr[start] : arr[right] < arr[start]));
    if (left < right) {
      swapArr(arr, left, right);
    }
  } while (left < right);
  const pointIndex = left === right ? right - 1 : right;
  swapArr(arr, start, pointIndex);
  quicksort(arr, start, pointIndex, isFirstOrder);
  quicksort(arr, pointIndex + 1, end, isFirstOrder);
};

/**
 * 快速排序
 * @param {number[]} arr 传入的数组
 * @param {boolean} isFirstOrder 是正序排序还是倒序排序，默认是 true
 * @returns {number[]}
 */
const quickSortFn = (arr, isFirstOrder = true) => {
  if (!arr || arr.length < 2) {
    return arr;
  }
  quicksort(arr, 0, arr.length, isFirstOrder);
};
// quickSortFn(arr);

// console.log(arr);

module.exports = {
  quickSortFn,
};
