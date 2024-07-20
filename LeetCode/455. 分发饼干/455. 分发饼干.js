/**
 * 方法一：大饼干先喂饱大胃口
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function (g, s) {
//   if (g === 0 || s === 0) {
//     return 0;
//   }
//   g.sort((a, b) => a - b);
//   s.sort((a, b) => a - b);
//   let index = s.length - 1,
//     result = 0;
//   // 遍历胃口
//   for (let i = g.length - 1; i >= 0; i--) {
//     // 遍历饼干
//     if (index >= 0 && s[index] >= g[i]) {
//       result++;
//       index--;
//     }
//   }
//   return result;
// };

/**
 * 方法二：小饼干先喂饱小胃口
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (g === 0 || s === 0) {
    return 0;
  }
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let index = 0,
    sLength = s.length,
    gLength = g.length;
  // 遍历饼干
  for (let i = 0; i < sLength; i++) {
    // 遍历胃口
    if (index <= gLength && s[i] >= g[index]) {
      index++;
    }
  }
  return index;
};
