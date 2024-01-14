const { swapArr } = require("./../tools/交换");

/**
 * 二叉堆的构建类
 */
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  // 推入元素
  push(val) {
    // 推入
    this.queue.push(val);

    // 上浮
    let index = this.size() - 1; // 记录推入元素下标
    let parent = Math.floor((index - 1) / 2); // 记录父节点下标

    // 注意 compare 参数的顺序
    while (parent >= 0 && this.compare(parent, index) > 0) {
      // 交换当前节点和父节点的位置
      swapArr(this.queue, index, parent);

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  // 获取堆顶元素并移除
  pop() {
    // 堆顶元素
    const out = this.queue[0];

    // 移除堆顶元素，填入最后一个元素
    this.queue[0] = this.queue.pop();

    // 下沉
    let index = 0; // 记录下沉元素下标
    let left = 1; // left 是左子节点下标 left + 1 是右子节点下标
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

    // 注意 compare 参数顺序
    while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
      swapArr(this.queue, index, searchChild);

      // 更新下标
      index = searchChild;
      left = index * 2 + 1;
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }

    return out;
  }

  // 返回堆内元素的数量
  size() {
    return this.queue.length;
  }

  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界问题
    if (this.queue[index1] === undefined) {
      return 1;
    }
    if (this.queue[index2] === undefined) {
      return -1;
    }
    return this.compareFn(this.queue[index1], this.queue[index2]);
  }
}
