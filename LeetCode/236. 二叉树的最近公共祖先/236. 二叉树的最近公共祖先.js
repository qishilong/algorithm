/**
 * 1. 利用回溯（后序遍历）
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q || !root) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q); // 左
  const right = lowestCommonAncestor(root.right, p, q); // 右

  // 中
  if (left && right) {
    return root;
  } else if (left && !right) {
    return left;
  } else if (!left && right) {
    return right;
  } else {
    return null;
  }
};
