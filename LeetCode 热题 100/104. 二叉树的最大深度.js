/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 递归
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

/**
 * 2. 广度优先搜索
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let depth = 0;
  while (queue.length) {
    let length = queue.length;
    while (length > 0) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      length--;
    }
    depth++;
  }

  return depth;
};
