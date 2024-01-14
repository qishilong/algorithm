// const arr = [1, 4, 1, 3, 1512, 451234, 15, 1, 412, 312, 51, 251, 341];

const swapArr = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const quicksort = (arr, begin, end) => {
  if (begin >= end - 1) {
    return arr;
  }
  let left = begin,
    right = end;
  do {
    do {
      left++;
    } while (left < right && arr[left] < arr[begin]);
    do {
      right--;
    } while (left < right && arr[right] > arr[begin]);
    if (left < right) {
      swapArr(arr, left, right);
    }
  } while (left < right);
  const pointIndex = left === right ? right - 1 : right;
  swapArr(arr, begin, pointIndex);
  quicksort(arr, begin, pointIndex);
  quicksort(arr, pointIndex + 1, end);
};

const quickSortFn = (arr) => {
  if (!arr || arr.length < 2) {
    return arr;
  }
  quicksort(arr, 0, arr.length);
};
// quickSortFn(arr);

// console.log(arr);

module.exports = {
  quickSortFn,
};
