/**
 * 数组
 * 方法一
 * 适用于大多数类型
 * @param {*} n1
 * @param {*} n2
 */
const swapArr = (arr, n1, n2) => {
  const temp = arr[n1];
  arr[n1] = arr[n2];
  arr[n2] = temp;
};

/**
 * 数组
 * 方法二
 * 适用于整数
 * @param {*} n1
 * @param {*} n2
 */
const swap1Arr = (arr, n1, n2) => {
  arr[n1] = arr[n1] + arr[n2];
  arr[n2] = arr[n1] - arr[n2];
  arr[n1] = arr[n1] - arr[n2];
};

/**
 * 数组
 * 方法三
 * 适用于整数
 * @param {*} n1
 * @param {*} n2
 */
const swap2Arr = (arr, n1, n2) => {
  arr[n1] = arr[n1] ^ arr[n2];
  arr[n2] = arr[n1] ^ arr[n2];
  arr[n1] = arr[n1] ^ arr[n2];
};

/**
 * 二叉树
 * @param {*} root 当前节点
 */
const swapBinaryTree = (root) => {
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
};

module.exports = {
  swapArr,
  swap1Arr,
  swap2Arr,
  swapBinaryTree,
};
