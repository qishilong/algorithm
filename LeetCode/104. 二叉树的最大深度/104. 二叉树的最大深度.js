/**
 * 1. 递归（后序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   // const leftNode = maxDepth(root.left); // 左
//   // const rightNode = maxDepth(root.right); // 右
//   // const depth = Math.max(leftNode, rightNode) + 1; // 中
//   // return depth;

//   // 简化写法
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

/**
 * 2. 递归（前序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//   let result = 0;
//   if (!root) {
//     return result;
//   }
//   // const getDepth = (node, depth) => {
//   //   result = Math.max(result, depth); // 中
//   //   if (!node.left && !node.right) {
//   //     return;
//   //   }
//   //   // 左
//   //   if (node.left) {
//   //     depth++; // 深度 +1
//   //     getDepth(node.left, depth);
//   //     depth--; // 回溯，深度-1
//   //   }
//   //   // 右
//   //   if (node.right) {
//   //     depth++; // 深度 +1
//   //     getDepth(node.right, depth);
//   //     depth--; // 回溯，深度-1
//   //   }
//   //   return;
//   // };

//   // 简化写法
//   const getDepth = (node, depth) => {
//     result = Math.max(result, depth); // 中
//     if (node.left) {
//       getDepth(node.left, depth + 1); // 左
//     }
//     if (node.right) {
//       getDepth(node.right, depth + 1); // 右
//     }
//     return;
//   };

//   getDepth(root, 1);
//   return result;
// };

/**
 * 3. 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    result++; // 记录深度
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
};
