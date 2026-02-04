/**
 * 1. 递归（后序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
// var minDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   // let leftDepth = minDepth(root.left); // 左
//   // let rightDepth = minDepth(root.right); // 右

//   // // 中
//   // // 如果左节点不为空，右节点为空，这时并不是最低点
//   // if (root.left && !root.right) {
//   //   return leftDepth + 1;
//   // }
//   // // 如果右节点不为空，左节点为空，这时并不是最低点
//   // if (root.right && !root.left) {
//   //   return rightDepth + 1;
//   // }
//   // return Math.min(leftDepth, rightDepth) + 1;

//   // 精简代码如下
//   if (root.left && !root.right) {
//     return minDepth(root.left) + 1;
//   }
//   if (root.right && !root.left) {
//     return minDepth(root.right) + 1;
//   }
//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// };

/**
 * 2. 递归（前序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
// var minDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   let result = Number.MAX_VALUE;

//   const getDepth = (node, depth) => {
//     // 中，判断是不是叶子节点
//     if (!node.left && !node.right) {
//       result = Math.min(result, depth);
//     }
//     // 左
//     if (node.left) {
//       getDepth(node.left, depth + 1);
//     }
//     // 右
//     if (node.right) {
//       getDepth(node.right, depth + 1);
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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    depth++; // 记录最小深度
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // 当左右节点都为空的时候，说明当前是最低点的一层了，退出，并返回结果
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return depth;
};
