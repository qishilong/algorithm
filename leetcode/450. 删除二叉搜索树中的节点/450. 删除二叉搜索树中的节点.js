/**
 * 1. 递归（利用二叉搜索树的特点）
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
// var deleteNode = function (root, key) {
//   // 第一种情况：没找到删除的节点，遍历到空节点直接返回了
//   if (!root) {
//     return root;
//   }

//   if (root.val === key) {
//     if (!root.left && !root.right) {
//       // 第二种情况：左右节点都为空，直接删除节点，返回 null 作为根节点
//       root = null;
//       return null;
//     } else if (!root.left) {
//       // 第三种情况：左孩子为空，右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
//       const right = root.right;
//       root = null;
//       return right;
//     } else if (!root.right) {
//       // 第四种情况：右孩子为空，左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
//       const left = root.left;
//       root = null;
//       return left;
//     } else {
//       // 第五种情况：左右孩子都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置，并返回删除节点的右孩子为新的根节点
//       let cur = root.right; // 找右子树最左面的节点
//       while (cur.left) {
//         cur = cur.left;
//       }
//       cur.left = root.left; // 把要删除的节点 (root) 的左子树放到 cur 的左孩子位置
//       let temp = root; // 保存 root 节点，下面用来删除（释放内存）
//       root = root.right;
//       temp = null; // 释放节点内存
//       return root; // 返回旧 root 的右孩子作为新 root
//     }
//   }

//   if (root.val > key) {
//     root.left = deleteNode(root.left, key);
//   }
//   if (root.val < key) {
//     root.right = deleteNode(root.right, key);
//   }

//   return root;
// };

/**
 * 2. 递归（不利用二叉树搜索树的特点，直接当作二叉树的节点删除）
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
// var deleteNode = function (root, key) {
//   if (!root) {
//     return root;
//   }

//   if (root.val === key) {
//     // 这里第二次操作目标值：最终删除的作用
//     if (!root.right) {
//       return root.left;
//     }
//     let cur = root.right;
//     while (cur.left) {
//       cur = cur.left;
//     }

//     // 这里第一次操作目标值：交换目标值其右子树最左面节点
//     const temp = root.val;
//     root.val = cur.val;
//     cur.val = temp;
//   }

//   root.left = deleteNode(root.left, key);
//   root.right = deleteNode(root.right, key);

//   return root;
// };

/**
 * 3. 迭代
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 将目标节点（删除节点）的左子树放到目标节点的右子树的最左面节点的左孩子位置上，并返回目标节点右孩子为新的根节点
  const deleteOneNode = (target) => {
    if (!target) {
      return target;
    }
    if (!target.right) {
      return target.left;
    }

    let cur = target.right;
    while (cur.left) {
      cur = cur.left;
    }
    cur.left = target.left;
    return target.right;
  };

  if (!root) {
    return root;
  }

  let cur = root,
    prev = null; // 记录 cur 的父节点，用来删除
  while (cur) {
    if (cur.val === key) {
      break;
    }
    prev = cur;
    if (cur.val > key) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  // 如果搜索树只有头节点
  if (!prev) {
    return deleteOneNode(cur);
  }

  // prev 需要知道是删左孩子还是右孩子
  if (prev.left && prev.left.val === key) {
    prev.left = deleteOneNode(cur);
  }
  if (prev.right && prev.right.val === key) {
    prev.right = deleteOneNode(cur);
  }

  return root;
};
