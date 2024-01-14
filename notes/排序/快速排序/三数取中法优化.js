const { swapArr } = require("../../../../tools/交换");
const { randomArray } = require("../../../../tools/获取随机数组");
const quickSort = (arr) => {
  const quickSortFn = (arr, left, right) => {
    if (left < right) {
      const index = getIndex(arr, left, right);
      quickSortFn(arr, left, index - 1);
      quickSortFn(arr, index + 1, right);
    }
  };
  quickSortFn(arr, 0, arr.length - 1);
  return arr;
};

const getMid = (arr, left, right) => {
  const mid = (left + (right - left)) >> 1;
  if (arr[left] <= arr[right]) {
    if (arr[mid] < arr[left]) {
      return left;
    } else if (arr[mid] > arr[right]) {
      return right;
    } else {
      return mid;
    }
  } else {
    if (arr[mid] < arr[right]) {
      return right;
    } else if (arr[mid] > arr[left]) {
      return left;
    } else {
      return mid;
    }
  }
};

const getIndex = (arr, left, right) => {
  let mid = getMid(arr, left, right);
  swapArr(arr, mid, right);
  const key = arr[right];
  const keyIndex = right;
  while (left < right) {
    while (left < right && arr[left] <= key) {
      // 因为可能有相同的值，防止越界，所以加上 left < right
      left++;
    }
    while (left < right && arr[right] >= key) {
      right--;
    }
    swapArr(arr, left, right);
  }
  swapArr(arr, left, keyIndex);
  return left;
};

const result = quickSort(randomArray, 0, randomArray.length - 1);
console.log(result);
