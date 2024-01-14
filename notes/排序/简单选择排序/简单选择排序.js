// const selectSort = (arr) => {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     // 保存当前最小数索引
//     let minIndex = i;
//     // 每次只从 i 的后一个位置开始查找
//     for (let j = i + 1; j < length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (i !== minIndex) {
//       swapArr(arr, i, minIndex);
//     }
//   }
//   return arr;
// };

// 两端同时排序
const doubleSelectSort = (arr) => {
  let left = 0,
    right = arr.length - 1;
  let min = left,
    max = right;
  while (left <= right) {
    min = left;
    max = right;
    for (let i = left; i <= right; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
      if (arr[i] > arr[max]) {
        max = i;
      }
    }
    swapArr(arr, left, min);
    if (left === max) {
      max = min;
    }
    swapArr(arr, right, max);
    left++;
    right--;
  }
  return arr;
};

const swapArr = (arr, x, y) => {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const arr = [1, 2, 3, 4, 2, 1, 3, 1, 1, 2, 4, 6, 8, 9, 6, 2, 4, 1, 4, 1, 5, 7, 8, 5, 2, 1, 4];
const result = doubleSelectSort(arr);
console.log(result);
