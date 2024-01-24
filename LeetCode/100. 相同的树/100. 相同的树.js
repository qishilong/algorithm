/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const compare = (left, right) => {
    if (left === null && right !== null) {
      return false;
    } else if (left !== null && right === null) {
      return false;
    } else if (left === null && right === null) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }
    const leftResult = compare(left.left, right.left);
    const rightResult = compare(left.right, right.right);
    return leftResult && rightResult;
  };
  return compare(p, q);
};
