/**
 * 1. 使用中序遍历转换成有序数组
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) {
    return 0;
  }
  const arr = [];
  const traversal = (node) => {
    if (!node) {
      return;
    }
    traversal(node.left); // 左
    arr.push(node.val); // 中
    traversal(node.right); // 右
  };
  traversal(root);
  if (arr.length < 2) {
    return 0;
  }
  // 统计正序数组的最小差值
  let result = Number.MAX_VALUE;
  for (let i = 1, len = arr.length; i < len; i++) {
    result = Math.min(arr[i] - arr[i - 1], result);
  }
  return result;
};

/**
 * 2. 中序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) {
    return 0;
  }
  let prev = null,
    result = Number.MAX_VALUE;

  const traversal = (node) => {
    if (!node) {
      return;
    }
    traversal(node.left); // 左
    if (prev) {
      result = Math.min(node.val - prev.val, result); // 中
    }
    prev = node; // 记录已经访问过的节点
    traversal(node.right); // 右
  };
  traversal(root);
  return result;
};

/**
 * 3. 迭代
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) {
    return 0;
  }
  let prev = null,
    result = Number.MAX_VALUE,
    stack = [],
    cur = root;

  while (cur || stack.length) {
    if (cur) {
      // 指针访问节点，访问到最底层
      stack.push(cur); // 将访问到的节点入栈
      cur = cur.left; // 左
    } else {
      cur = stack.pop();
      if (prev) {
        result = Math.min(result, cur.val - prev.val); // 中
      }
      prev = cur; // 记录上一个访问过的节点
      cur = cur.right; // 右
    }
  }

  return result;
};
