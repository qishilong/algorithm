/**
 * 贪心
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 注意这里是判断是否能够到达最后一个下标，而不是计算怎么跳最小的次数到达终点
  // 只有一个元素，就是能达到
  if (nums.length <= 1) {
    return true;
  }
  let cover = 0;
  // 注意是小于等于cover
  for (let i = 0; i <= cover; i++) {
    if (i + nums[i] > cover) {
      cover = i + nums[i];
    }
    // 说明可以覆盖到终点了（即到达最后一个下标）
    if (cover >= nums.length - 1) {
      return true;
    }
  }

  return false;
};
