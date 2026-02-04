/**
 * 1. 递归（后序遍历：左右中）
 * @param {TreeNode} root
 * @return {number}
 */
// var sumOfLeftLeaves = function (root) {
//   // 终止条件
//   if (!root) {
//     return 0;
//   }
//   // 这个终止条件也可以不用写，但如果不写的话会多递归一层
//   if (!root.left && !root.right) {
//     return 0;
//   }
//   let leftVal = sumOfLeftLeaves(root.left); // 左

//   // 当前节点的左子树就是一个左叶子的情况
//   if (root.left && !root.left.left && !root.left.right) {
//     leftVal += root.left.val;
//   }
//   const rightVal = sumOfLeftLeaves(root.right); // 右
//   const result = leftVal + rightVal; // 中
//   return result;
// };

/**
 * 2. 迭代（层序遍历）
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    // 当前节点的左子树就是一个左叶子的情况
    if (node.left && !node.left.left && !node.left.right) {
      result += node.left.val;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
};
