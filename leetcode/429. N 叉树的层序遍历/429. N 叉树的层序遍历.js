/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const result = [],
    queue = [root];
  while (queue.length) {
    const curLevel = [],
      len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      if (node.children) {
        for (const item of node.children) {
          queue.push(item);
        }
      }
    }
    result.push(curLevel);
  }
  return result;
};
