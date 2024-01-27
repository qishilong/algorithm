/**
 * 1. 递归（前序遍历）中左右
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// var isSubtree = function (root, subRoot) {
//   if (!root && !subRoot) {
//     return true;
//   } else if ((!root && subRoot) || (root && !subRoot)) {
//     return false;
//   }

//   // 收集结果
//   const result = [];

//   const compareFn = (node1, node2) => {
//     const compare = (left, right) => {
//       // 首先排除空节点的情况
//       if (left === null && right !== null) {
//         return false;
//       } else if (left !== null && right === null) {
//         return false;
//       } else if (left === null && right === null) {
//         return true;
//         // 排除完空节点后排除值不相等的情况
//       } else if (left.val !== right.val) {
//         return false;
//       }
//       // 此时就是左右节点都不为空，且数值相等
//       // 递归处理
//       const leftResult = compare(left.left, right.left); // 左子树：左、右子树：左（相对于求对称二叉树，只需改一下这里的顺序）
//       const rightResult = compare(left.right, right.right); // 左子树：右、右子树：右
//       return leftResult && rightResult; // 左子树：中、右子树：中
//     };
//     return compare(node1, node2);
//   };

//   const dfs = (node) => {
//     if (!node) {
//       return;
//     }
//     if (compareFn(node, subRoot)) {
//       return result.push(true);
//     } else {
//       dfs(node.left);
//       dfs(node.right);
//     }
//   };

//   dfs(root);

//   return result.includes(true); // 返回结果中是否包含 true 的选项
// };

/**
 * 2. 迭代
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) {
    return true;
  } else if ((!root && subRoot) || (root && !subRoot)) {
    return false;
  }

  const compareFn = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    } else if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    const queue = [node1, node2];
    while (queue.length) {
      for (let i = 0, len = queue.length; i < len; i++) {
        const leftNode = queue.shift();
        const rightNode = queue.shift();
        if (!leftNode && !rightNode) {
          continue;
        }
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
          return false;
        }

        queue.push(leftNode.left);
        queue.push(rightNode.left);
        queue.push(leftNode.right);
        queue.push(rightNode.right);
      }
    }
    return true;
  };

  const queue = [root];
  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const node = queue.shift();
      if (compareFn(node, subRoot)) {
        return true;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return false;
};
