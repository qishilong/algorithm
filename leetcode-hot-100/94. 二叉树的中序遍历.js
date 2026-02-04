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
 * 左中右
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   if (!root) {
//     return [];
//   }

//   const result = [];

//   const inOrder = root => {
//     if (!root) {
//       return;
//     }
//     inOrder(root.left);
//     result.push(root.val);
//     inOrder(root.right);
//   };

//   inOrder(root);

//   return result;
// };

/**
 * 2. 迭代遍历
 * 左中右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const stack = [root],
    result = [];

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }

    // 右
    if (node.right) {
      stack.push(node.right);
    }

    // 中
    stack.push(node);
    stack.push(null);

    // 左
    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};
