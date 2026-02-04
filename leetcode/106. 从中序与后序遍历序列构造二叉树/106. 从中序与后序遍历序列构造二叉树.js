/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder || !postorder || inorder.length !== postorder.length) {
    return null;
  }

  // 后序数组最后一个元素，就是当前的中间节点
  const rootVal = postorder[postorder.length - 1];

  // 找到中序数组的切割点
  const index = inorder.indexOf(rootVal);

  // 如果没找到，说明数组不符合构造二叉树条件，返回 null
  if (index === -1) {
    return null;
  }

  // 建立当前的中间节点
  const root = new TreeNode(rootVal);

  // 叶子节点
  if (postorder.length === 1) {
    return root;
  }

  // 切割中序数组
  // 左闭右开区间 (0, index)
  const inorderLeft = inorder.slice(0, index);
  // 左开右闭区间 (index + 1, inorder.length)
  const inorderRight = inorder.slice(index + 1, inorder.length);

  // 切割后序数组
  // 左闭右开区间 (0, index)，这里可以使用 inorderLeft(左中序数组) 的长度作为切割点，也可以直接使用 index 作为切割点，左中序数组的长度和 index 的大小是相同的
  const postorderLeft = postorder.slice(0, index);
  // 左开右开区间 (index, postorder.length - 1)，这里要舍弃后序数组的最后一个元素
  const postorderRight = postorder.slice(index, postorder.length - 1);

  // 构造二叉树左节点
  root.left = buildTree(inorderLeft, postorderLeft);
  // 构造二叉树右节点
  root.right = buildTree(inorderRight, postorderRight);

  return root;
};
