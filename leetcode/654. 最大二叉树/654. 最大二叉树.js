/**
 * 1. 使用新创建的数组
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums || nums.length === 0) {
    return null;
  }
  const node = new TreeNode(undefined);
  if (nums.length === 1) {
    node.val = nums[0];
    return node;
  }

  // 找到数组中最大的值和下标
  let maxVal = Number.MIN_VALUE;
  let maxValIndex = Number.MIN_VALUE;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > maxVal) {
      maxVal = nums[i];
      maxValIndex = i;
    }
  }

  node.val = maxVal;

  // 最大值所在下标的左区间，构建左子树
  if (maxValIndex > 0) {
    node.left = constructMaximumBinaryTree(nums.slice(0, maxValIndex));
  }

  // 最大值所在下标的右区间，构建右子树
  if (maxValIndex < nums.length - 1) {
    node.right = constructMaximumBinaryTree(nums.slice(maxValIndex + 1, nums.length));
  }

  return node;
};
