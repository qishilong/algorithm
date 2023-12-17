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
// var preorderTraversal = function (root, result = []) {
//   if (!root) {
//     return result;
//   }

//   const dfs = (root) => {
//     if (!root) {
//       return result;
//     }
//     result.push(root.val);
//     dfs(root.left);
//     dfs(root.right);
//   };

//   dfs(root);

//   return result;
// };

/**
 * 2. 迭代法
 * @param {*} root
 * @param {*} result
 */
var preorderTraversal = function (root, result = []) {
  if (!root) {
    return result;
  }
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    result.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return result;
};

const result = preorderTraversal(root);
console.log(result);
