/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  const result = [],
    queue = [root];
  while (queue.length) {
    const len = queue.length,
      curLevel = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(curLevel.reduce((pre, cur) => pre + cur, 0) / curLevel.length);
  }
  return result;
};
