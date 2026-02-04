/**
 * 贪心
 * 移动下标达到了当前覆盖的最远距离下标时，步数就要加一，来增加覆盖距离。最后的步数就是最少步数。
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
//   if (nums.length <= 1) {
//     return 0;
//   }
//   let curDistance = 0, // 当前覆盖最远距离下标
//     nextDistance = 0, // 记录走的最大步数
//     result = 0; // 下一步覆盖最远距离下标
//   for (let i = 0, length = nums.length; i < length; i++) {
//     // 更新下一步覆盖最远距离下标
//     if (nums[i] + i > nextDistance) {
//       nextDistance = nums[i] + i;
//     }
//     // 遇到当前覆盖最远距离下标
//     if (i === curDistance) {
//       // 需要走下一步
//       result++;
//       // 更新当前覆盖最远距离下标（如果当前的下一步覆盖最远距离下标还没有到达终点，需要更新当前覆盖最远距离下标，为下一步判断做准备）
//       curDistance = nextDistance;
//       // 当前覆盖最远距离到达集合终点，不用做 result++ 操作了，直接结束
//       if (nextDistance >= length - 1) {
//         break;
//       }
//     }
//   }
//   return result;
// };

/**
 * 贪心
 * 针对于方法一的特殊情况，可以统一处理，即：移动下标只要遇到当前覆盖最远距离的下标，直接步数加一，不考虑是不是终点的情况。想要达到这样的效果，只要让移动下标，最大只能移动到 nums.size - 2 的地方就可以了。
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) {
    return 0;
  }
  let curDistance = 0, // 当前覆盖最远距离下标
    nextDistance = 0, // 记录走的最大步数
    result = 0; // 下一步覆盖最远距离下标
  // 这里注意是小雨 nums.length - 1，这是关键所在
  for (let i = 0, length = nums.length - 1; i < length; i++) {
    // 更新下一步覆盖最远距离下标
    if (nums[i] + i > nextDistance) {
      nextDistance = nums[i] + i;
    }
    // 遇到当前覆盖最远距离下标
    if (i === curDistance) {
      // 需要走下一步
      result++;
      // 更新当前覆盖最远距离下标
      curDistance = nextDistance;
    }
  }
  return result;
};
