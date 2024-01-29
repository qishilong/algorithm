/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder || preorder.length !== inorder.length) {
    return null;
  }

  // 前序遍历数组第一个元素，就是当前的中间节点
  const rootVal = preorder[0];

  // 找到中序遍历的切割点
  const index = inorder.indexOf(rootVal);

  // 如果没找到，说明数组不符合构造二叉树条件，返回 null
  if (index === -1) {
    return null;
  }

  // 建立当前的中间节点
  const root = new TreeNode(rootVal);

  // 叶子节点
  if (preorder.length === 1) {
    return root;
  }

  // 切割前序数组
  // 左闭右开 (1, index + 1)
  const preorderLeft = preorder.slice(1, index + 1);
  // 左闭右开 (index + 1, preorder.length)
  const preorderRight = preorder.slice(index + 1, preorder.length);

  // 切割中序数组
  // 左闭右开 (0, index)，这里可以使用 preorderLeft(左前序数组) 的长度作为切割点，也可以直接使用 index 作为切割点，左前序数组的长度和 index 的大小是相同的
  const inorderLeft = inorder.slice(0, index);
  // 左闭右开 (index + 1, inorder.length)
  const inorderRight = inorder.slice(index + 1, inorder.length);

  // 构造二叉树左节点
  root.left = buildTree(preorderLeft, inorderLeft);
  // 构造二叉树右节点
  root.right = buildTree(preorderRight, inorderRight);

  return root;
};
