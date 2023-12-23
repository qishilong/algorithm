/**
 * 前序遍历：中左右
 * 压栈顺序：右左中
 * @param {*} root
 * @param {*} result
 */
const preorderTraversal = (root, result = []) => {
  if (!root) {
    return result;
  }
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }
    // 右
    if (node.right) {
      stack.push(node.right);
    }
    // 左
    if (node.left) {
      stack.push(node.left);
    }
    // 中
    stack.push(node);
    stack.push(null);
  }
  return result;
};

/**
 * 中序遍历：左中右
 * 压栈顺序：右中左
 * @param {*} root
 * @param {*} result
 */
const inorderTraversal = (root, result = []) => {
  if (!root) {
    return result;
  }
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }
    // 右
    if (node.right) {
      stack.push(node.right);
    }
    // 中
    stack.push(node);
    stack.push(null);
    // 左
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};

/**
 * 后序遍历：左右中
 * 压栈顺序：中右左
 * @param {*} root
 * @param {*} result
 */
const postorderTraversal = (root, result = []) => {
  if (!root) {
    return result;
  }
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }

    // 中
    stack.push(node);
    stack.push(null);
    // 右
    if (node.right) {
      stack.push(node.right);
    }
    // 左
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};
