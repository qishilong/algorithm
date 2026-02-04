/**
 * 1. 递归（有返回值）
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// var insertIntoBST = function (root, val) {
//   if (!root) {
//     const node = new TreeNode(val);
//     return node;
//   }
//   if (root.val > val) {
//     root.left = insertIntoBST(root.left, val);
//   } else {
//     root.right = insertIntoBST(root.right, val);
//   }
//   return root;
// };

/**
 * 2. 递归（优化，无返回值）
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// var insertIntoBST = function (root, val) {
//   const traverse = (cur, val) => {
//     if (!cur) {
//       const node = new TreeNode(val);
//       if (val > parent.val) {
//         parent.right = node;
//       } else {
//         parent.left = node;
//       }
//       return;
//     }
//     parent = cur;

//     if (cur.val > val) {
//       traverse(cur.left, val);
//     } else if (cur.val < val) {
//       traverse(cur.right, val);
//     }
//     return;
//   };

//   if (!root) {
//     root = new TreeNode(val);
//   }
//   let parent = new TreeNode(0);

//   traverse(root, val);

//   return root;
// };

/**
 * 3. 迭代
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    const node = new TreeNode(val);
    return node;
  }

  let cur = root,
    parent = root; // 这个很重要，需要记录上一个节点，否则无法赋值新节点
  while (cur) {
    parent = cur;
    if (cur.val > val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  const node = new TreeNode(val);

  // 此时使用 parent 节点进行赋值的
  if (parent.val > val) {
    parent.left = node;
  } else {
    parent.right = node;
  }

  return root;
};
