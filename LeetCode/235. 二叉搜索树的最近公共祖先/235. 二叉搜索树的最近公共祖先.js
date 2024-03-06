/**
 * 1. 递归
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // // 中
  // if (!root) {
  //   return root;
  // }
  // // 左
  // if (root.val > p.val && root.val > q.val) {
  //   const left = lowestCommonAncestor(root.left, p, q);
  //   if (left) {
  //     return left;
  //   }
  // }
  // // 右
  // if (root.val < p.val && root.val < q.val) {
  //   const right = lowestCommonAncestor(root.right, p, q);
  //   if (right) {
  //     return right;
  //   }
  // }
  // return root;

  // 精简写法

  if (root.val > p.val && root.val > q.val) {
    // 左
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    // 右
    return lowestCommonAncestor(root.right, p, q);
  } else {
    // 中
    return root;
  }
};

/**
 * 2. 迭代
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return root;
};
