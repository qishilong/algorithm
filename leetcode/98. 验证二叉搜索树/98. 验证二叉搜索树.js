/**
 * 1. 使用中序遍历转换成数组，然后遍历数组是否正序
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   if (!root) {
//     return true;
//   }
//   const arr = [];
//   const getValArr = (node) => {
//     if (!node) {
//       return;
//     }
//     getValArr(node.left, arr);
//     arr.push(node.val); // 将二叉树转换成正序数组
//     getValArr(node.right, arr);
//   };

//   getValArr(root, arr);

//   for (let i = 1, len = arr.length; i < len; i++) {
//     // 注意是 <=，因为搜索树里不能有相同元素
//     if (arr[i] <= arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

/**
 * 2. 中序遍历二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   let prev = null; // 用来记录前一个节点

//   const traversal = (node) => {
//     if (node !== 0 && !node) {
//       return true;
//     }
//     const left = traversal(node.left); // 左

//     if (prev && prev.val >= node.val) {
//       return false;
//     }
//     prev = node; // 把前一个节点改为当前节点

//     const right = traversal(node.right); // 右

//     return left && right;
//   };
//   return traversal(root);
// };

/**
 * 3. 迭代法
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const stack = [];
  let cur = root;
  let prev = null; // 记录当前访问过的节点
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left; // 左
    } else {
      cur = stack.pop(); // 中
      if (prev && cur.val <= prev.val) {
        return false;
      }
      prev = cur; // 保存当前访问过的节点
      cur = cur.right; // 右
    }
  }
  return true;
};
