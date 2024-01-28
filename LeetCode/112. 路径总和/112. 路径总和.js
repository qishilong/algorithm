/**
 * 1. 递归（前序遍历：中左右）
 * 不要累加然后判断路径和是否等于目标和，这样代码会比较麻烦，可以使用递减，让计数器 count 初始为目标和，然后每次减去遍历路径节点上的数值，如果最后 count === 0，同时到了叶子节点的话，说明找到了目标和，如果遍历到了叶子节点但是 count 不为 0，说明没找到。
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//   if (!root) {
//     return false;
//   }

//   // const dfs = (node, count) => {
//   //   // 遇到叶子节点，并且计数为 0，说明有合适的路径
//   //   if (!node.left && !node.right && count === 0) {
//   //     return true;
//   //   }
//   //   // 遇到叶子节点但是计数不为 0，说明不是合适的路径
//   //   if (!node.left && !node.right) {
//   //     return false;
//   //   }

//   //   // 左，同时保证空节点不遍历
//   //   if (node.left) {
//   //     count -= node.left.val; // 递归，处理节点
//   //     // 遇到叶子节点返回 true，则直接返回 true
//   //     if (dfs(node.left, count)) {
//   //       return true;
//   //     }
//   //     count += node.left.val; // 回溯，撤销处理结果
//   //   }

//   //   // 右，同时保证空节点不遍历
//   //   if (node.right) {
//   //     count -= node.right.val; // 递归，处理节点
//   //     // 遇到叶子节点返回 true，则直接返回 true
//   //     if (dfs(node.right, count)) {
//   //       return true;
//   //     }
//   //     count += node.right.val; // 回溯，撤销处理节点
//   //   }
//   //   return false; // 没有合适的路径，返回 false
//   // };

//   // return dfs(root, targetSum - root.val);

//   // 精简代码如下
//   if (!root.left && !root.right && targetSum === root.val) {
//     return true;
//   }
//   return (
//     hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
//   );
// };

/**
 * 2. 迭代（使用栈模拟递归，也可以使用队列）
 * 栈和队列的推入数据和取出数据的方式相反，栈是 pop() 操作，推入数据方式是右左，队列是 shift() 操作，推入数据方式是左右
 * 此时栈里一个元素不仅要记录该节点的指针，还要记录从根节点到该节点的路径数值和
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  // 此时栈里面放的是一个数组 [node：节点, count：路径数值和]
  const stack = [[root, root.val]];
  while (stack.length) {
    const [node, count] = stack.pop();
    // 如果该节点是叶子节点，同时到达该节点时的路径数值和等于 targetSum，说明存在这样的路径，返回 true
    if (!node.left && !node.right && count === targetSum) {
      return true;
    }

    // 右节点，压进一个节点的时候，同时将到达该节点时的路径数值和记录下来
    if (node.right) {
      stack.push([node.right, count + node.right.val]);
    }
    // 左节点，压进一个节点的时候，同时将到达该节点时的路径数值和记录下来
    if (node.left) {
      stack.push([node.left, count + node.left.val]);
    }
  }
  return false;
};
