const { TreeNode } = require("../../notes/二叉树/二叉树的构造方法.js");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [],
    queue = [];
  queue.push(root);
  while (queue.length) {
    // 记录当前层级节点数
    const length = queue.length;
    // 存放每一层的节点
    const curLevel = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      curLevel.push(node.val);

      // 存放当前层下一层节点
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    // 把每一层的节点存放到结果数组中
    result.push(curLevel);
  }
  return result;
};

/**
 * 递归
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const order = (curNode, result, depth) => {
    if (!curNode) {
      return;
    }
    if (depth === result.length) {
      result.push([]);
    }
    result[depth].push(curNode.val);
    order(curNode.left, result, depth + 1);
    order(curNode.right, result, depth + 1);
  };

  order(root, result, 0);
  return result;
};
