/**
 * 两个队列实现
 */
// var MyStack = function () {
//   this.queue1 = [];
//   this.queue2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   this.queue1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   // 减少两个队列交换的次数，只有当 queue1 为空时，才交换两个队列
//   if (!this.queue1.length) {
//     [this.queue1, this.queue2] = [this.queue2, this.queue1];
//   }
//   while (this.queue1.length > 1) {
//     this.queue2.push(this.queue1.shift());
//   }
//   return this.queue1.shift();
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   const cur = this.pop();
//   this.queue1.push(cur);
//   return cur;
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   return !this.queue1.length && !this.queue2.length;
// };

/**
 * 一个队列实现
 */
var MyStack = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.queue.length > 0) {
    return this.queue.pop();
  }
  return undefined;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.queue.length > 0) {
    return this.queue[this.queue.length - 1];
  }
  return undefined;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
