/**
 * 得到每层的值
 * @param {*} root
 */
const levelOrderGetVal = (root) => {
  // 节点为空，直接返回空数组
  if (!root) {
    return [];
  }
  // 保存结果
  const result = [];
  // 创建队列，并直接将根节点保存到队列中
  const queue = [root];

  // 如果当前队列不为空的情况下，就说明还有节点没有遍历完，继续执行
  while (queue.length) {
    // 记录每一层节点的数量
    const len = queue.length;
    // 用于保存当前层节点的值
    const curLevel = [];

    // 遍历每一层中的每个节点
    for (let i = 0; i < len; i++) {
      // 当前层中的当前节点
      const node = queue.shift();
      // 保存当前节点的值
      curLevel.push(node.val);

      // 这两层的含义就是存入当前层的下一层节点
      // 如果当前节点左子节点不为空，则将当前节点的左子节点存到队列中
      if (node.left) {
        queue.push(node.left);
      }
      // 如果当前节点右子节点不为空，则将当前节点的右子节点存到队列中
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 将当前层的节点存入到结果中
    result.push(curLevel);
  }
  // 返回结果
  return result;
};

/**
 * 对每个节点进行操作
 * 比如将每一层的上一个节点指向下一个节点
 * @param {*} root
 */
const levelOrderHandleNode = (root) => {
  if (!root) {
    return root;
  }
  // 道理同上，创建队列，将根节点存储到队列中
  const queue = [root];
  // 如果当前队列不为空的情况下，就说明还有节点没有遍历完，继续执行
  while (queue.length) {
    // 记录每一层节点的数量
    const len = queue.length;

    // 遍历每一层中的每个节点
    for (let i = 0; i < len; i++) {
      // 当前层中的当前节点
      const node = queue.shift();

      // 连接
      // 这段代码的意思是：记录上一个节点，如果当前层还存在下一个节点，则将当前记录的上一个节点（也就是当前节点）指向当前层的下一个节点，并且控制连接操作不超出当前层节点的数量
      // 因为经过上一次的 queue.shift()，当前 queue[0] 记录的是当前层当前节点的下一个节点，所以进行连接操作
      // i < len - 1 是为了保证在不超过当前节点数量时才进行连接操作
      if (i < len - 1) {
        node.next = queue[0];
      }

      // 这两层的含义就是存入当前层的下一层节点
      // 如果当前节点左子节点不为空，则将当前节点的左子节点存到队列中
      if (node.left) {
        queue.push(node.left);
      }
      // 如果当前节点右子节点不为空，则将当前节点的右子节点存到队列中
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // 返回结果
  return root;
};
