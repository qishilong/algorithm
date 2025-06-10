/**
 * 1. 枚举
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (k !== 0 && !k) || k <= 0) {
//     return [];
//   }

//   const res = [],
//     length = nums.length;
//   let fast = k - 1;

//   for (let i = 0; i < length && fast < length; i++, fast++) {
//     const curArr = nums.slice(i, fast + 1);
//     res.push(Math.max(...curArr));
//   }

//   return res;
// };

/**
 * 2. 单调队列
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   if (!nums || !Array.isArray(nums) || nums.length === 0 || (k !== 0 && !k) || k <= 0) {
//     return [];
//   }

//   // 单调队列，从大到小
//   class MonotonicQueue {
//     constructor() {
//       this.queue = [];
//     }

//     // 如果enqueue的数值大于入口元素的数值，那么就将队列后端的数值弹出，直到enqueue的数值小于等于队列入口元素的数值为止。
//     // 这样就保持了队列里的数值是单调从大到小的了。
//     enqueue(value) {
//       let queueEntrance = this.queue[this.queue.length - 1];
//       while (this.queue.length && value > queueEntrance) {
//         this.queue.pop();
//         queueEntrance = this.queue[this.queue.length - 1];
//       }
//       this.queue.push(value);
//     }

//     // 每次弹出的时候，比较当前要弹出的数值是否等于队列出口元素的数值，如果相等则弹出。
//     // 同时dequeue之前判断队列当前是否为空。
//     dequeue(value) {
//       if (this.queue.length && this.front() === value) {
//         this.queue.shift();
//       }
//     }

//     // 查询当前队列里的最大值 直接返回队列前端也就是this.queue[0]就可以了。
//     front() {
//       return this.queue[0];
//     }
//   }

//   const monotonicQueue = new MonotonicQueue(),
//     result = [],
//     length = nums.length;

//   // 先将前k个元素放进队列
//   for (let i = 0; i < k; i++) {
//     monotonicQueue.enqueue(nums[i]);
//   }

//   // result 记录前k的元素的最大值
//   result.push(monotonicQueue.front());

//   for (let i = k; i < length; i++) {
//     // 滑动窗口移除最前面元素
//     monotonicQueue.dequeue(nums[i - k]);
//     // 滑动窗口前加入最后面的元素
//     monotonicQueue.enqueue(nums[i]);
//     // 记录对应的最大值
//     result.push(monotonicQueue.front());
//   }

//   return result;
// };

/**
 * 3. 单调队列
 * 记录单调时间
 * 只取最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums || !Array.isArray(nums) || nums.length === 0 || (k !== 0 && !k) || k <= 0) {
    return [];
  }

  const result = [],
    queue = [],
    length = nums.length;

  for (let i = 0; i < length; i++) {
    // 保证队头合法性
    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    // 保证对尾合法性
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    // 上面两步保证队列只取最大值的下标

    queue.push(i);

    // 取对头，更新答案，同时保证是窗口内部的最大值
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};
