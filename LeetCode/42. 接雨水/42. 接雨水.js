/**
 * 1. 暴力解法（双指针）
 * leetcode 超时
 * 按照列方向来计算雨水
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   if (!height || !Array.isArray(height)) {
//     return;
//   }

//   if (height.length <= 1) {
//     return 0;
//   }

//   const length = height.length;
//   let sum = 0;

//   for (let i = 1; i < length - 1; i++) {
//     let leftHeight = height[i],
//       rightHeight = height[i];

//     // 记录当前柱子左边柱子最大高度
//     for (let left = i - 1; left >= 0; left--) {
//       if (height[left] > leftHeight) {
//         leftHeight = height[left];
//       }
//     }

//     for (let right = i + 1; right < length; right++) {
//       if (height[right] > rightHeight) {
//         rightHeight = height[right];
//       }
//     }

//     const h = Math.min(leftHeight, rightHeight) - height[i];

//     if (h > 0) {
//       sum += h;
//     }
//   }

//   return sum;
// };

/**
 * 2. 双指针（优化）
 * 按照列方向来计算雨水
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   if (!height || !Array.isArray(height)) {
//     return;
//   }

//   if (height.length <= 1) {
//     return 0;
//   }

//   const length = height.length;
//   let sum = 0;

//   const maxLeftHeight = new Array(length).fill(-1);
//   const maxRightHeight = new Array(length).fill(-1);

//   // 记录每个柱子左边柱子的最大高度
//   maxLeftHeight[0] = height[0]; // 初始化值
//   for (let i = 1; i < length; i++) {
//     maxLeftHeight[i] = Math.max(maxLeftHeight[i - 1], height[i]);
//   }

//   // 记录每个柱子右边柱子的最大高度
//   maxRightHeight[length - 1] = height[length - 1]; // 初始化值
//   for (let i = length - 2; i >= 0; i--) {
//     maxRightHeight[i] = Math.max(maxRightHeight[i + 1], height[i]);
//   }

//   for (let i = 0; i < length; i++) {
//     const h = Math.min(maxLeftHeight[i], maxRightHeight[i]) - height[i];

//     // 只有当 h > 0 时，才将 h 加入到 sum 中
//     if (h > 0) {
//       sum += h;
//     }
//   }

//   return sum;
// };

/**
 * 3. 单调栈
 * 单调栈是按照行方向来计算雨水
 * 使用单调栈，也是通过 长 * 宽 来计算雨水面积的。
 *
 * 三种情况：
 * 情况一：当前遍历的元素（柱子）高度小于栈顶元素的高度 height[i] < height[st.top()]
 * 情况二：当前遍历的元素（柱子）高度等于栈顶元素的高度 height[i] == height[st.top()]
 * 情况三：当前遍历的元素（柱子）高度大于栈顶元素的高度 height[i] > height[st.top()]
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height || !Array.isArray(height)) {
    return;
  }

  if (height.length <= 1) {
    return 0;
  }

  const length = height.length,
    stack = []; // 存着下标，计算的时候用下标对应的柱子高度
  let sum = 0;

  let stackLength = 0,
    stackTop = 0;

  stack.push(0);

  for (let i = 1; i < length; i++) {
    stackLength = stack.length;
    stackTop = stack[stackLength - 1];

    if (height[stackTop] > height[i]) {
      // 情况一
      stack.push(i);
    } else if (height[stackTop] === height[i]) {
      // 情况二
      stack.pop();
      stack.push(i);
    } else {
      // 情况三
      while (stackLength !== 0 && height[stackTop] < height[i]) {
        const mid = stackTop;
        stack.pop();

        stackLength = stack.length;
        stackTop = stack[stackLength - 1];

        if (stackLength !== 0) {
          const h = Math.min(height[stackTop], height[i]) - height[mid];
          if (h > 0) {
            const w = i - stackTop - 1; // 注意减一，只求两个柱子之间的中间宽度
            sum += h * w; // 长 * 宽
          }
        }
      }

      stack.push(i);
    }
  }

  return sum;
};
