/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 * @lcpr version=30204
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  if (!root1 && !root2) return;

  const root1Arr = [],
    root2Arr = [];

  const dfs = (root, arr) => {
    if (!root) {
      return;
    }
    arr.push(root.val);
    dfs(root.left, arr);
    dfs(root.right, arr);
  };
  dfs(root1, root1Arr);
  dfs(root2, root2Arr);

  return [...root1Arr, ...root2Arr].sort((a, b) => a - b);
};
// @lc code=end

/*
// @lcpr case=start
// [2,1,4]\n[1,0,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,8]\n[8,1]\n
// @lcpr case=end

 */
