/**
 * 1. 第一种写法
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   const arr = new Array(n).fill().map(() => new Array(n).fill());
//   let top = 0,
//     bottom = n - 1,
//     left = 0,
//     right = n - 1,
//     curNum = 1;

//   while (top <= bottom && left <= right) {
//     for (let i = left; i <= right; i++) {
//       arr[top][i] = curNum++;
//     }
//     top++;
//     for (let i = top; i <= bottom; i++) {
//       arr[i][right] = curNum++;
//     }
//     right--;

//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         arr[bottom][i] = curNum++;
//       }
//       bottom--;
//     }
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         arr[i][left] = curNum++;
//       }
//       left++;
//     }
//   }

//   return arr;
// };

/**
 * 2. 第二种写法
 * @param {*} n
 */
var generateMatrix = function (n) {
  const arr = new Array(n).fill().map(() => new Array(n).fill());
  let startX = 0,
    startY = 0,
    loop = Math.floor(n / 2), // 循环圈数
    offset = 1, // 每一层填充数字
    curNum = 1; // 当前填充数字

  while (loop--) {
    let row = startX,
      col = startY;
    // 上层从左到右（左闭右开）
    for (; col < n - offset; col++) {
      arr[row][col] = curNum++;
    }

    // 右层从上到下（上闭下开）
    for (; row < n - offset; row++) {
      arr[row][col] = curNum++;
    }

    // 下层从右到左（右闭左开）
    for (; col > startX; col--) {
      arr[row][col] = curNum++;
    }

    // 左层从下到上（下闭上开）
    for (; row > startY; row--) {
      arr[row][col] = curNum++;
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新填充数
    offset++;
  }

  // 如果 n 是奇数，需要主动填充最中间的数
  if (n % 2 === 1) {
    arr[startX][startY] = curNum;
  }

  return arr;
};

const n = 3;
const result = generateMatrix(n);
console.table(result);
