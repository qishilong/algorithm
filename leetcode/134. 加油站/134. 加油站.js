/**
 * 1. 暴力
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
//   if (gas.length === 0) {
//     return -1;
//   }
//   if (gas.length !== cost.length) {
//     return;
//   }

//   for (let i = 0, length = gas.length; i < length; i++) {
//     // 记录剩余油量
//     let rest = gas[i] - cost[i];
//     // 以 i 为起点行驶一圈，index 为下一个目的地
//     let index = (i + 1) % length;

//     // 模拟以 i 起点行驶一圈（如果有 rest === 0，那么答案就不唯一了）
//     while (rest > 0 && index !== i) {
//       rest += gas[index] - cost[index];
//       index = (index + 1) % length;
//     }

//     // 如果以 i 为起点跑一圈，剩余油量 >= 0，返回该起始位置
//     if (rest >= 0 && index === i) {
//       return i;
//     }
//   }

//   return -1;
// };

/**
 * 2. 贪心（方法一）
 * 直接从全局进行贪心选择，情况如下：
 * 情况一：如果gas的总和小于cost总和，那么无论从哪里出发，一定是跑不了一圈的
 * 情况二：rest[i] = gas[i]-cost[i]为一天剩下的油，i从0开始计算累加到最后一站，如果累加没有出现负数，说明从0出发，油就没有断过，那么0就是起点。
 * 情况三：如果累加的最小值是负数，汽车就要从非0节点出发，从后向前，看哪个节点能把这个负数填平，能把这个负数填平的节点就是出发节点。
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
//   if (gas.length === 0) {
//     return -1;
//   }
//   if (gas.length !== cost.length) {
//     return;
//   }

//   let curSum = 0,
//     min = Infinity; // 从起点出发，油箱里的油量最小值

//   for (let i = 0, length = gas.length; i < length; i++) {
//     curSum += gas[i] - cost[i];
//     if (curSum < min) {
//       min = curSum;
//     }
//   }

//   // 情况一
//   if (curSum < 0) {
//     return -1;
//   }

//   // 情况二
//   if (min >= 0) {
//     return 0;
//   }

//   // 情况三
//   for (let i = gas.length - 1; i >= 0; i--) {
//     min += gas[i] - cost[i];
//     if (min >= 0) {
//       return i;
//     }
//   }

//   return -1;
// };

/**
 * 3. 贪心（方法二）
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (gas.length === 0) {
    return -1;
  }
  if (gas.length !== cost.length) {
    return;
  }

  let curSum = 0,
    totalSum = 0,
    start = 0;
  for (let i = 0, length = gas.length; i < length; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    // 当前累加 rest[i]和 curSum 一旦小于0
    if (curSum < 0) {
      start = i + 1; // 起始位置更新为 i + 1
      curSum = 0; // curSum 从0开始
    }
  }

  // 如果 totalSum < 0，说明怎么走都不可能跑一圈了
  if (totalSum < 0) {
    return -1;
  }

  return start;
};
