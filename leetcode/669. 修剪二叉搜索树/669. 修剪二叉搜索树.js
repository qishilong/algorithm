/**
 * 1. 递归
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// var trimBST = function (root, low, high) {
//   if (!root) {
//     return root;
//   }

//   if (root.val < low) {
//     const right = trimBST(root.right, low, high); // 寻找符合区间 [low, high] 的节点
//     return right;
//   }
//   if (root.val > high) {
//     const left = trimBST(root.left, low, high); // 寻找符合 [low, high] 的节点
//     return left;
//   }

//   root.left = trimBST(root.left, low, high); // root.left 接入符合条件的左孩子
//   root.right = trimBST(root.right, low, high); // root.right 接入符合条件的右孩子
//   return root;
// };

/**
 * 2. 迭代（利用二叉搜索树的有序性，不需要使用栈模拟递归的过程）
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) {
    return root;
  }

  // 处理头节点，让 root 移动到 [low, high] 范围内，注意是左闭右闭
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      // 小于 low 往右走
      root = root.right;
    } else {
      // 大于 high 往左走
      root = root.left;
    }
  }

  let cur = root;

  // 此时 root 已经在 [low, high] 范围内，处理左孩子元素小于 low 的情况
  while (cur) {
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right;
    }
    cur = cur.left;
  }

  cur = root;

  // 此时 root 已经在 [low, high] 范围内，处理右孩子元素大于 high 的情况
  while (cur) {
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left;
    }
    cur = cur.right;
  }

  return root;
};
