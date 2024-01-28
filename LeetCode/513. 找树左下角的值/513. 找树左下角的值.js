/**
 * 1. 递归（前序遍历：中左右）
 * 找到最大深度的叶子节点即可
 * @param {TreeNode} root
 * @return {number}
 */
// var findBottomLeftValue = function (root) {
//   if (!root) {
//     return;
//   }
//   let maxDepth = Number.MIN_VALUE;
//   let result = undefined;
//   const dfs = (node, curDepth) => {
//     // 当前节点是叶子节点
//     if (!node.left && !node.right) {
//       // 是否存在更深的深度
//       if (curDepth > maxDepth) {
//         maxDepth = curDepth;
//         result = node.val;
//       }
//       return;
//     }
//     if (node.left) {
//       curDepth++;
//       dfs(node.left, curDepth);
//       curDepth--; // 回溯
//     }
//     if (node.right) {
//       curDepth++;
//       dfs(node.right, curDepth);
//       curDepth--; // 回溯
//     }
//     return;
//   };

//   dfs(root, 1); // 从第一层遍历，所以从 1 开始

//   return result;
// };

/**
 * 2. 迭代（层序遍历）
 * 返回最后一层的第一个节点即可
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) {
    return;
  }
  const queue = [root];
  let result = undefined;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i === 0) {
        result = node.val; // 记录最后一行的第一个元素
      }

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
