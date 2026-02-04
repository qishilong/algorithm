const { TreeNode } = require("./../../notes/二叉树/二叉树的构造方法.js");

const right = new TreeNode(2);
right.left = new TreeNode(3);

const root = new TreeNode(1, null, right);
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
var inorderTraversal = function (root, result = []) {
  if (!root) {
    return result;
  }

  const dfs = (root) => {
    if (!root) {
      return result;
    }
    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  return result;
};

/**
 * 2. 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, result = []) {
  if (!root) {
    return result;
  }
  const stack = [];
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      result.push(cur.val);
      cur = cur.right;
    }
  }
  return result;
};

const result = inorderTraversal(root);
console.log(result);
