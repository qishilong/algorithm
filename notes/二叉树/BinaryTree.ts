/**
 * 1. 二叉树的前中后序遍历
 * 2. 根据 前中， 中后序遍历还原二叉树
 */

class TreeNode {
    value: number | string | any;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value?: number | string | any, left?: TreeNode | null, right?: TreeNode | null) {
        this.value = (value === undefined ? 0 : value);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BinaryTree {

    /**
     * 深度优先遍历
     * 1. 前序遍历
     * 2. 中序遍历
     * 3. 后序遍历
     */
    // 前序遍历 递归实现
    preorderTraversal(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        };
        const result: unknown[] = [];
        result.push(treeNode.value);
        this.preorderTraversal(treeNode.left as TreeNode);
        this.preorderTraversal(treeNode.right as TreeNode);
        return result;
    }

    // 前序遍历 栈实现
    preorderTraversalWithStack(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        }
        const resultNode: TreeNode[] = [], result: unknown[] = [];
        let currentNode = treeNode;
        while (currentNode !== null || resultNode.length !== 0) {
            // 迭代访问节点的左孩子，并入栈
            while (currentNode !== null) {
                result.push(currentNode.value);
                resultNode.push(currentNode);
                currentNode = currentNode.left!;
            }

            // 如果节点没有左孩子，则弹出栈顶元素，访问节点右孩子
            if (resultNode.length !== 0) {
                currentNode = resultNode.pop()!;
                currentNode = currentNode.right!;
            }
        }
        return result;
    }

    // 中序遍历 递归实现
    inorderTraversal(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        };
        const result: unknown[] = [];
        this.inorderTraversal(treeNode.left as TreeNode);
        result.push(treeNode.value);
        this.inorderTraversal(treeNode.right as TreeNode);
        return result;
    }

    // 中序遍历 栈实现
    inorderTraversalWithStack(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        }
        const result: unknown[] = [], resultNode: TreeNode[] = [];
        let treeNodeRoot: TreeNode | null = treeNode as TreeNode;
        while (treeNodeRoot !== null || resultNode.length !== 0) {
            // 左节点都先压入栈
            while (treeNodeRoot !== null) {
                resultNode.push(treeNodeRoot);
                treeNodeRoot = treeNode.left;
            }
            const currentNode = resultNode.pop();
            result.push(currentNode?.value);
            if (currentNode?.right !== null) {
                treeNodeRoot = currentNode?.right as TreeNode;
            }
        };
        return result;
    }

    // 后序遍历 递归实现
    postorderTraversal(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        };
        const result: unknown[] = [];
        this.postorderTraversal(treeNode.left as TreeNode);
        this.postorderTraversal(treeNode.right as TreeNode);
        result.push(treeNode.value);
        return result;
    };

    // 后序遍历 栈实现
    postorderTraversalWithStack(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        }
        const result: unknown[] = [], resultNode: TreeNode[] = [treeNode];
        while (resultNode.length !== 0) {
            // 头部插入
            const currentNode = resultNode.pop();
            result.unshift(currentNode?.value);
            currentNode?.left && resultNode.push(currentNode.left);
            currentNode?.right && resultNode.push(currentNode.right);
        }
        return result;
    }

    /**
     * 广度优先遍历
     * 1. 层序遍历
     */
    // 层序遍历
    sequenceTraversal(treeNode: TreeNode | null): unknown[] | null {
        if (treeNode === null) {
            return null;
        }
        const result: unknown[] = [],
            resultNode: TreeNode[] = [treeNode];
        while (resultNode.length !== 0) {
            const currentNode: TreeNode = resultNode.shift() as TreeNode;
            result.push(currentNode?.value);
            if (currentNode.left !== null) {
                resultNode.push(currentNode.left!);
            }
            if (currentNode.right !== null) {
                resultNode.push(currentNode.right!);
            }
        }
        return result;
    }

    // 前序遍历和中序遍历的结果 返回二叉树
    frontAndCenterCreateBinaryTree(front: string[] | number[] | any[], center: string[] | number[] | any[]): TreeNode | null {
        if (front === null || center === null || front.length === 0 || center.length === 0 || front.length !== center.length) {
            return null;
        }
        const head = new TreeNode(front[0]);
        const index = center.indexOf(front[0]);
        const frontLeft = front.slice(1, index + 1);
        const frontRight = front.slice(index + 1, front.length);
        const centerLeft = center.slice(0, index);
        const centerRight = center.slice(index + 1, center.length);
        head.left = this.frontAndCenterCreateBinaryTree(frontLeft, centerLeft);
        head.right = this.frontAndCenterCreateBinaryTree(frontRight, centerRight);

        return head;
    };

    // 中序遍历和后序遍历的结果 返回二叉树
    centerAndAfterCreateBinaryTree(center: string[] | number[] | any[], after: string[] | number[] | any[]): TreeNode | null {
        if (center === null || after === null || center.length === 0 || after.length === 0 || center.length !== after.length) {
            return null;
        }
        const headValueIndex = after.length - 1;
        const head = new TreeNode(after[headValueIndex]);
        const index = center.indexOf(after[headValueIndex]);
        const centerLeft = center.slice(0, index);
        const centerRight = center.slice(index + 1, center.length);
        const afterLeft = after.slice(0, index);
        const afterRight = after.slice(index, after.length - 1);
        head.left = this.centerAndAfterCreateBinaryTree(centerLeft, afterLeft);
        head.right = this.centerAndAfterCreateBinaryTree(centerRight, afterRight);
        return head;
    };
}

// const binaryTree = new BinaryTree();
// const center = ["d", "b", "e", "a", "f", "c", "g"];
// const after = ["d", "e", "b", "f", "g", "c", "a"];
// const resultValue1 = binaryTree.centerAndAfterCreateBinaryTree(center, after);
// console.log(resultValue1);
// const resultArr = binaryTree.sequenceTraversal(resultValue1);
// console.log(resultArr);
// const front = ["a", "b", "d", "e", "c", "f", "g"];
// const center1 = ["d", "b", "e", "a", "f", "c", "g"];
// const resultValue2 = binaryTree.frontAndCenterCreateBinaryTree(front, center1);
// console.log(resultValue1);
// console.log(resultValue2);