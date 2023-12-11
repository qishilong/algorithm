/**
 * 单调队列（这样写不好，会超出时间限制）
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   class MonotonousQueue {
//     constructor() {
//       this.queue = [];
//     }
//     enqueue(value) {
//       let back = this.queue[this.queue.length - 1];
//       while (back !== undefined && back < value) {
//         this.queue.pop();
//         back = this.queue[this.queue.length - 1];
//       }
//       this.queue.push(value);
//     }
//     dequeue(value) {
//       if (this.front() === value) {
//         this.queue.shift();
//       }
//     }
//     front() {
//       return this.queue[0];
//     }
//   }

//   const monQueue = new MonotonousQueue();

//   // 初始化队列
//   let i = 0,
//     j = 0;
//   const result = [];
//   while (j < k) {
//     monQueue.enqueue(nums[j++]);
//   }
//   result.push(monQueue.front());
//   while (j < nums.length) {
//     monQueue.enqueue(nums[j]);
//     monQueue.dequeue(nums[i]);
//     result.push(monQueue.front());
//     i++, j++;
//   }
//   return result;
// };

/**
 * 单调队列（只取最大值就行了）
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = [];
  // 存下标，代表单调时间
  const queue = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    // 保证对头合法性
    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    // 保证对尾合法性
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    queue.push(i);

    // 取对头，更新答案
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
};
const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
const result = maxSlidingWindow(nums, k);
console.log(result);
