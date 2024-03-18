/**
 * 1. 递归（右中左遍历）
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var convertBST = function (root) {
//   if (!root) {
//     return root;
//   }

//   let prev = 0; // 记录前一个节点的数值
//   const traverse = (node) => {
//     if (!node) {
//       return node;
//     }
//     traverse(node.right);

//     node.val += prev;
//     prev = node.val;

//     traverse(node.left);
//   };

//   traverse(root);

//   return root;
// };

/**
 * 2. 迭代
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (!root) {
    return root;
  }

  let prev = 0; // 记录前一个节点的数值

  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.right; // 右
    } else {
      cur = stack.pop(); // 中

      cur.val += prev;
      prev = cur.val;

      cur = cur.left; // 左
    }
  }

  return root;
};
