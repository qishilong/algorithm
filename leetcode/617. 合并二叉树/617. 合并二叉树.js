/**
 * 同时遍历两个二叉树和同时遍历一个树的逻辑其实是一样的，只不过传入两个树的节点，同时操作
 */

/**
 * 1. 递归（前序遍历）
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// var mergeTrees = function (root1, root2) {
//   // 如果 root1 为空，合并之后就应该是 root2
//   if (!root1) {
//     return root2;
//   }
//   // 如果 root2 为空，合并之后就应该是 root1
//   if (!root2) {
//     return root1;
//   }

//   root1.val += root2.val; // 中
//   root1.left = mergeTrees(root1.left, root2.left); // 左
//   root1.right = mergeTrees(root1.right, root2.right); // 右

//   return root1;
// };

/**
 * 2. 递归（中序遍历）
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// var mergeTrees = function (root1, root2) {
//   // 如果 root1 为空，合并之后就应该是 root2
//   if (!root1) {
//     return root2;
//   }
//   // 如果 root2 为空，合并之后就应该是 root1
//   if (!root2) {
//     return root1;
//   }

//   root1.left = mergeTrees(root1.left, root2.left); // 左
//   root1.val += root2.val; // 中
//   root1.right = mergeTrees(root1.right, root2.right); // 右

//   return root1;
// };

/**
 * 3. 递归（后序遍历）
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// var mergeTrees = function (root1, root2) {
//   // 如果 root1 为空，合并之后就应该是 root2
//   if (!root1) {
//     return root2;
//   }
//   // 如果 root2 为空，合并之后就应该是 root1
//   if (!root2) {
//     return root1;
//   }

//   root1.left = mergeTrees(root1.left, root2.left); // 左
//   root1.right = mergeTrees(root1.right, root2.right); // 右
//   root1.val += root2.val; // 中

//   return root1;
// };

/**
 * 4. 递归（前序遍历，不修改 root1 结构，重新定义一个树）
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// var mergeTrees = function (root1, root2) {
//   // 如果 root1 为空，合并之后就应该是 root2
//   if (!root1) {
//     return root2;
//   }
//   // 如果 root2 为空，合并之后就应该是 root1
//   if (!root2) {
//     return root1;
//   }

//   const root = new TreeNode(null); // 重新定义新的树，不修改原有两个树的结构

//   root.val = root1.val + root2.val; // 中
//   root.left = mergeTrees(root1.left, root2.left); // 左
//   root.right = mergeTrees(root1.right, root2.right); // 右

//   return root;
// };

/**
 * 5. 迭代（使用队列，模拟层序遍历）
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 如果 root1 为空，合并之后就应该是 root2
  if (!root1) {
    return root2;
  }
  // 如果 root2 为空，合并之后就应该是 root1
  if (!root2) {
    return root1;
  }
  const queue = [root1, root2];

  while (queue.length) {
    const node1 = queue.shift();
    const node2 = queue.shift();

    // 此时两个节点一定不为空，val 相加
    node1.val += node2.val;

    // 如果两颗树左节点都不为空，加入队列
    if (node1.left && node2.left) {
      queue.push(node1.left);
      queue.push(node2.left);
    }

    // 如果两颗树右节点都不为空，加入队列
    if (node1.right && node2.right) {
      queue.push(node1.right);
      queue.push(node2.right);
    }

    // 当 root1 的左节点为空，root2 的右节点不为空时，就赋值过去
    if (!node1.left && node2.left) {
      node1.left = node2.left;
    }

    // 当 root1 的右节点为空，root2 的右节点不为空时，就赋值过去
    if (!node1.right && node2.right) {
      node1.right = node2.right;
    }
  }

  return root1;
};
