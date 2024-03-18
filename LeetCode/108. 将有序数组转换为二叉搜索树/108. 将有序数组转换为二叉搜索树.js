/**
 * 1. 递归
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function (nums) {
//   if (nums.length === 0) {
//     return null;
//   }

//   const traverse = (arr, left, right) => {
//     if (left > right) {
//       return null;
//     }
//     const mid = left + Math.floor((right - left) / 2);
//     const root = new TreeNode(arr[mid]);
//     root.left = traverse(arr, left, mid - 1);
//     root.right = traverse(arr, mid + 1, right);
//     return root;
//   };

//   return traverse(nums, 0, nums.length - 1);
// };

/**
 * 2. 迭代
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  const root = new TreeNode(0); // 初始根节点
  const nodeQueue = [root]; // 放遍历的节点，并将根节点入队列
  const leftQueue = [], // 保存左区间下标
    rightQueue = []; // 保存右区间下标
  leftQueue.push(0); // 0 为左区间下标初始位置
  rightQueue.push(nums.length - 1); // nums.length - 1 为右区间下标初始位置

  while (nodeQueue.length) {
    const curNode = nodeQueue.pop();
    const left = leftQueue.pop(),
      right = rightQueue.pop(),
      mid = left + Math.floor((right - left) / 2);

    curNode.val = nums[mid]; // 将 mid 对应的元素给中间节点

    // 处理左区间
    if (left <= mid - 1) {
      curNode.left = new TreeNode(0);
      nodeQueue.push(curNode.left);
      leftQueue.push(left);
      rightQueue.push(mid - 1);
    }

    // 处理右区间
    if (right >= mid + 1) {
      curNode.right = new TreeNode(0);
      nodeQueue.push(curNode.right);
      leftQueue.push(mid + 1);
      rightQueue.push(right);
    }
  }

  return root;
};
