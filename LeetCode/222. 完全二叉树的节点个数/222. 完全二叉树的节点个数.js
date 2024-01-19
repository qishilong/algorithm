/**
 * 1. 递归（后序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
// var countNodes = function (root) {
//   if (!root) {
//     return 0;
//   }
//   // const leftNode = countNodes(root.left); // 左
//   // const rightNode = countNodes(root.right); // 右
//   // const totalNode = leftNode + rightNode + 1; // 中
//   // return totalNode;

//   // 简化版本
//   return countNodes(root.left) + countNodes(root.right) + 1;
// };

/**
 * 2. 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
// var countNodes = function (root) {
//   if (!root) {
//     return 0;
//   }
//   let totalNode = 0;
//   const queue = [root];
//   while (queue.length) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift();
//       totalNode++;
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
//   return totalNode;
// };

/**
 * 3. 利用 完全二叉树 性质
 * 满二叉树：2^树深度 - 1
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  let left = root.left,
    right = root.right,
    leftDepth = 0,
    rightDepth = 0;
  while (left) {
    left = left.left;
    leftDepth++;
  }
  while (right) {
    right = right.right;
    rightDepth++;
  }
  if (leftDepth === rightDepth) {
    return 2 ** (leftDepth + 1) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
