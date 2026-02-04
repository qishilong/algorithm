/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1. 贪心
 * 有如下三种状态：
 * - 该节点无覆盖
 * - 本节点有摄像头
 * - 本节点有覆盖
 * 我们分别有三个数字来表示：
 * 0：该节点无覆盖
 * 1：本节点有摄像头
 * 2：本节点有覆盖
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function (root) {
  if (!root) {
    return root
  }

  // 保存结果
  let result = 0

  const traversal = (cur) => {
    // 空节点，该节点有覆盖
    if (cur === null) {
      return 2
    }
    const left = traversal(cur.left) // 左
    const right = traversal(cur.right) // 右

    // 情况1
    // 左右节点都有覆盖
    if (left === 2 && right === 2) {
      return 0
    }

    // 情况2
    // left === 0 && right === 0 左右节点无覆盖
    // left === 1 && right === 0 左节点有摄像头，右节点无覆盖
    // left === 0 && right === 1 左节点无覆盖，右节点有摄像头
    // left === 0 && right === 2 左节点无覆盖，右节点有覆盖
    // left === 2 && right === 0 左节点有覆盖，右节点无覆盖
    if (left === 0 || right === 0) {
      result++
      return 1
    }

    // 情况3
    // left === 1 && right === 2 左节点有摄像头，右节点有覆盖
    // left === 2 && right === 1 左节点有覆盖，右节点有摄像头
    // left === 1 && right === 1 左右节点都有摄像头
    // 其他情况前段代码均已覆盖
    if (left === 1 || right === 1) {
      return 2
    }

    // 代码不会走到这一步，这一部分主要是为了保持代码分支完整
    return -1
  }

  // 情况4
  // root 根节点无覆盖
  if (traversal(root) === 0) {
    result++
  }

  return result
}
