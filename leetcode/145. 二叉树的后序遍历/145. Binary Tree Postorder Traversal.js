const { TreeNode } = require("./../../notes/二叉树/二叉树的构造方法.js");

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 递归法
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function (root, result = []) {
//   if (!root) {
//     return result;
//   }

//   const dfs = (root) => {
//     if (!root) {
//       return result;
//     }
//     dfs(root.left);
//     dfs(root.right);
//     result.push(root.val);
//   };

//   dfs(root);

//   return result;
// };

/**
 * 2. 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root, result = []) {
  if (!root) {
    return result;
  }
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    result.push(cur.val);
    // 因为最后需要翻转数组一次，所以先 push left 节点
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  return result.reverse();
};

const result = postorderTraversal(root);
console.log(result);
