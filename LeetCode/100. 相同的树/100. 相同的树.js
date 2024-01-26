/**
 * 1. 递归
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   if ((!p && q) || (q && !p)) {
//     return false;
//   } else if (!p && !q) {
//     return true;
//   }
//   // const compare = (left, right) => {
//   //   // 首先排除空节点的情况
//   //   if (left === null && right !== null) {
//   //     return false;
//   //   } else if (left !== null && right === null) {
//   //     return false;
//   //   } else if (left === null && right === null) {
//   //     return true;
//   //     // 排除完空节点后排除值不相等的情况
//   //   } else if (left.val !== right.val) {
//   //     return false;
//   //   }
//   //   // 此时就是左右节点都不为空，且数值相等
//   //   // 递归处理
//   //   const leftResult = compare(left.left, right.left); // 左子树：左、右子树：左（相对于求对称二叉树，只需改一下这里的顺序）
//   //   const rightResult = compare(left.right, right.right); // 左子树：右、右子树：右
//   //   return leftResult && rightResult; // 左子树：中、右子树：中
//   // };
//   // return compare(p, q);

//   // 简化写法
//   const compare = (left, right) => {
//     if (left === null && right !== null) {
//       return false;
//     } else if (left !== null && right === null) {
//       return false;
//     } else if (left === null && right === null) {
//       return true;
//     } else if (left.val !== right.val) {
//       return false;
//     }

//     return compare(left.left, right.left) && compare(left.right, right.right);
//   };

//   return compare(p, q);
// };

/**
 * 2. 迭代
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if ((!p && q) || (q && !p)) {
    return false;
  } else if (!p && !q) {
    return true;
  }
  const queue = [p, q];
  while (queue.length) {
    const leftNode = queue.shift();
    const rightNode = queue.shift();
    if (!leftNode && !rightNode) {
      continue;
    }
    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
      return false;
    }

    // 相对于求对称二叉树，这里两棵树都要保持一样的遍历顺序
    queue.push(leftNode.left);
    queue.push(rightNode.left);
    queue.push(leftNode.right);
    queue.push(rightNode.right);
  }
  return true;
};
