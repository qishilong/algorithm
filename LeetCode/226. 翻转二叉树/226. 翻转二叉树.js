const { swapBinaryTree } = require("../../notes/tools/交换");

/**
 * 1. 递归（前序遍历）
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function (root) {
//   if (!root) {
//     return root;
//   }
//   swapBinaryTree(root);
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// };

/**
 * 2. 递归（前序遍历）
 * 递归是 递 和 归的两个过程，先递到底然后再归
 * @param {*} root
 */
// var invertTree = function (root) {
//   if (!root) {
//     return root;
//   }
//   // 交换左右节点
//   const rootRight = root.right;
//   root.right = invertTree(root.left);
//   root.left = invertTree(rootRight);
//   return root;
// };

/**
 * 3. 递归（中序遍历，已经不是真正的中序遍历了）
 * 递归是 递 和 归的两个过程，先递到底然后再归
 * @param {*} root
 */
// var invertTree = function (root) {
//   if (!root) {
//     return root;
//   }
//   // 交换左右节点
//   invertTree(root.left);
//   swapBinaryTree(root);
//   // 注意 这里依然要遍历左孩子，因为中间节点已经翻转了，否则的话就会出现某些节点的左右孩子会翻转两次。
//   invertTree(root.left);
//   return root;
// };

/**
 * 4. 递归（后序遍历）
 * 递归是 递 和 归的两个过程，先递到底然后再归
 * @param {*} root
 */
// var invertTree = function (root) {
//   if (!root) {
//     return root;
//   }
//   // 交换左右节点
//   invertTree(root.left);
//   invertTree(root.right);
//   swapBinaryTree(root);
//   return root;
// };

/**
 * 5. 迭代遍历的统一写法（前序遍历：中左右）
 * @param {*} root
 */
// var invertTree = function (root) {
//   if (!root) {
//     return root;
//   }
//   const stack = [root];
//   while (stack.length) {
//     const node = stack.pop();
//     if (node) {
//       if (node.right) {
//         stack.push(node.right);
//       }
//       if (node.left) {
//         stack.push(node.left);
//       }
//       stack.push(node);
//       stack.push(null);
//     } else {
//       node = stack.pop();
//       swapBinaryTree(node);
//     }
//   }
//   return root;
// };

/**
 * 6. 层序遍历
 * @param {*} root
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      swapBinaryTree(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return root;
};
