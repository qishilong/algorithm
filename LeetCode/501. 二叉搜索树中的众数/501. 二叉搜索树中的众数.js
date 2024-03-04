/**
 * 1. 利用 map+对数组排序获取众数（前序遍历）
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  if (!root) {
    return [];
  }
  const map = new Map();
  const traverse = (node) => {
    if (!node) {
      return;
    }
    map.set(node.val, map.get(node.val) ? map.get(node.val) + 1 : 1);
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  const mapToArr = [];

  for (const item of map.entries()) {
    mapToArr.push(item);
  }

  mapToArr.sort((a, b) => b[1] - a[1]);
  const result = [mapToArr[0][1]];
  for (let i = 1, len = mapToArr.length; i < len; i++) {
    if (mapToArr[i][1] === mapToArr[0][1]) {
      result.push(mapToArr[i][1]);
    }
  }
  return result;
};
