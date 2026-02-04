/**
 * 1. 递归（前序遍历）中左右
 * @param {TreeNode} root
 * @return {string[]}
 */
// var binaryTreePaths = function (root) {
//   if (!root) {
//     return [];
//   }
//   let curPathArr = [];
//   const result = [];
//   const traversal = (node, path, result) => {
//     path.push(String(node.val)); // 中
//     if (!node.left && !node.right) {
//       let curPath = "";
//       for (let i = 0, len = path.length - 1; i < len; i++) {
//         curPath += `${path[i]}->`;
//       }
//       curPath += path[path.length - 1];
//       result.push(curPath);
//       return;
//     }

//     // 左
//     if (node.left) {
//       traversal(node.left, path, result);
//       path.pop(); // 回溯
//     }
//     // 右
//     if (node.right) {
//       traversal(node.right, path, result);
//       path.pop(); // 回溯
//     }
//   };

//   traversal(root, curPathArr, result);
//   return result;
// };

/**
 * 2. 迭代法
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  const stack = [root],
    curPathArr = [""],
    result = [];
  while (stack.length) {
    const node = stack.pop();
    let path = curPathArr.pop();

    // 到叶子节点终止，添加路径到结果中
    if (!node.left && !node.right) {
      result.push(path + node.val);
      continue;
    }
    path += node.val + "->";
    // 因为是利用栈进行迭代，所以应该先判断右节点，以达到先左后右的顺序
    // 右节点存在
    if (node.right) {
      stack.push(node.right);
      curPathArr.push(path);
    }
    // 左节点存在
    if (node.left) {
      stack.push(node.left);
      curPathArr.push(path);
    }
  }
  return result;
};
