/**
 * 1. 暴力解法
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   if (!height || !Array.isArray(height) || height.length <= 2) {
//     return 0;
//   }

//   const length = height.length;
//   let sum = 0;

//   for (let i = 0; i < length; i++) {
//     // 第一个柱子和最后一个柱子不接雨水
//     if (i === 0 || i === length - 1) {
//       continue;
//     }

//     let leftHeight = height[i], // 记录左边柱子最高高度
//       rightHeight = height[i]; // 记录右边柱子最高高度

//     for (let l = i - 1; l >= 0; l--) {
//       if (height[l] > leftHeight) {
//         leftHeight = height[l];
//       }
//     }

//     for (let r = i + 1; r < length; r++) {
//       if (height[r] > rightHeight) {
//         rightHeight = height[r];
//       }
//     }

//     const h = Math.min(rightHeight, leftHeight) - height[i];
//     if (h > 0) sum += h; // 注意只有 h>0 的时候，再统计到总和中
//   }

//   return sum;
// };

/**
 * 2. 双指针
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   if (!height || !Array.isArray(height) || height.length <= 2) {
//     return 0;
//   }

//   const length = height.length,
//     maxLeftHeight = new Array(length).fill(null),
//     maxRightHeight = new Array(length).fill(null);
//   let sum = 0;

//   // 记录每个柱子左边柱子的最大高度
//   maxLeftHeight[0] = height[0];
//   for (let i = 1; i < length; i++) {
//     maxLeftHeight[i] = Math.max(maxLeftHeight[i - 1], height[i]);
//   }

//   // 记录每个柱子右边柱子的最大高度
//   maxRightHeight[length - 1] = height[length - 1];
//   for (let i = length - 2; i >= 0; i--) {
//     maxRightHeight[i] = Math.max(maxRightHeight[i + 1], height[i]);
//   }

//   // 求和
//   for (let i = 0; i < length; i++) {
//     const h = Math.min(maxRightHeight[i], maxLeftHeight[i]) - height[i];
//     // 注意只有 h>0 的时候，在统计到总和中
//     if (h > 0) {
//       sum += h;
//     }
//   }

//   return sum;
// };

/**
 * 3. 单调栈
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height || !Array.isArray(height) || height.length <= 2) {
    return 0;
  }

  const length = height.length;

  const st = []; // 存着下标，计算的时候用下标对应的柱子高度
  st.push(0);
  let sum = 0;
  for (let i = 1; i < length; i++) {
    if (height[i] < height[st[st.length - 1]]) {
      // 情况一
      st.push(i);
    }
    if (height[i] == height[st[st.length - 1]]) {
      // 情况二
      st.pop(); // 其实这一句可以不加，效果是一样的，但处理相同的情况的思路却变了。
      st.push(i);
    } else {
      // 情况三
      while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
        // 注意这里是while
        let mid = st[st.length - 1];
        st.pop();
        if (st.length !== 0) {
          let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
          let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
          sum += h * w;
        }
      }
      st.push(i);
    }
  }
  return sum;
};
