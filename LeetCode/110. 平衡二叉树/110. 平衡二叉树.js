/**
 * 1. 后序遍历（左右中）
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isBalanced = function (root) {
//   // 获取高度
//   // 确定递归三步曲，当前左子树右子树高度相差大于1就返回-1
//   // 1. 确定递归参数以及返回值
//   const getDepth = (node) => {
//     // 2. 确定递归终止条件
//     if (!node) {
//       return 0;
//     }
//     // 3. 确定单层递归逻辑
//     const leftDepth = getDepth(node.left); // 左子树高度
//     // 当判定左子树为不平衡二叉树时，直接返回 -1
//     if (leftDepth === -1) {
//       return -1;
//     }
//     const rightNode = getDepth(node.right); // 右子树高度
//     // 当判定右子树为不平衡二叉树时，直接返回 -1
//     if (rightNode === -1) {
//       return -1;
//     }

//     // 确定递归到当前的左右子树是否是平衡二叉树，如果不是平衡二叉树，直接返回 -1，如果是，则返回当前树的高度，并且继续递归
//     if (Math.abs(leftDepth - rightNode) > 1) {
//       return -1;
//     } else {
//       return Math.max(leftDepth, rightNode) + 1;
//     }
//   };

//   // 返回结果
//   return getDepth(root) !== -1;
// };

/**
 * 2. 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isBalanced = function (root) {
//   if (!root) {
//     return true;
//   }
//   const getDepth = (node) => {
//     if (!node) {
//       return 0;
//     }
//     const leftDepth = getDepth(node.left);
//     const rightDepth = getDepth(node.right);
//     return Math.max(leftDepth, rightDepth) + 1;
//   };
//   const leftDepth = getDepth(root.left);
//   const rightDepth = getDepth(root.right);
//   if (Math.abs(leftDepth - rightDepth) > 1) {
//     return false;
//   } else {
//     return isBalanced(root.left) && isBalanced(root.right);
//   }
// };

/**
 * 3. 迭代
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  const getHeight = (node) => {
    const stack = [];
    if (node) {
      stack.push(node); // 压入当前元素
    }
    let depth = 0,
      height = 0;
    while (stack.length) {
      let curNode = stack[stack.length - 1]; // 取出栈顶
      if (curNode) {
        stack.pop();
        stack.push(curNode); // 中
        stack.push(null);
        depth++;
        // 右
        if (curNode.right) {
          stack.push(curNode.right);
        }
        // 左
        if (curNode.left) {
          stack.push(curNode.left);
        }
      } else {
        stack.pop();
        curNode = stack[stack.length - 1];
        stack.pop();
        depth--;
      }
      height = height > depth ? height : depth;
    }
    return height;
  };
  const stack = [root];
  while (stack.length) {
    const node = stack.pop(); // 栈顶元素
    if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
      return false;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return true;
};
